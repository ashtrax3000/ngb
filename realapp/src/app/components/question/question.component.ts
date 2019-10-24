import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionsComponent implements OnInit {

  questions: Question[];
  sub: any;

  constructor(private _questionService: QuestionService) { }

  ngOnInit() {
    this.sub = this._questionService.getQuestions()
    .subscribe(res => this.questions = res);
  }
  
}
