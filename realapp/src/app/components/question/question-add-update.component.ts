import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/model/category';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-question-add-update',
  templateUrl: './question-add-update.component.html',
  styleUrls: ['./question-add-update.component.scss']
})
export class QuestionAddUpdateComponent implements OnInit {

  categories: Category[];
  sub:any;
  questionForm: FormGroup;
  question: Question;

  constructor( 
      private fb: FormBuilder,
      private categoryService: CategoryService) { 
  }

  ngOnInit() {
    this.sub = this.categoryService.getCategories()
        .subscribe(res => this.categories = res);

    this.question = new Question();
    this.createForm(this.question);
  }

  createForm (question: Question) {
    let fgs: FormGroup[] = question.answers.map(answer => {
      let fg = new FormGroup({
        answerText: new FormControl(answer.answerText, Validators.required),
        correct: new FormControl(answer.correct)
      });
      return fg;
    });

    let answersFA = new FormArray(fgs);
  
    let fcs: FormControl[] = question.tags.map(tag => {
      return new FormControl(tag);
    });

    if(fcs.length == 0)
      fcs = [new FormControl('')];

    let tagsFA = new FormArray(fcs);

    this.questionForm = this.fb.group({
      category: [(question.categories.length > 0 ? question.categories[0] : '')],
      questionText: [question.questionText, Validators.required],
      tags: '',
      tagsArray: tagsFA,
      answer: answersFA
    });
  }

  get answers(): FormArray {
    return this.questionForm.get('answer') as FormArray;
  }

}
