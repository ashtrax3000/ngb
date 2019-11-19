import { Component, OnInit, OnDestroy } from '@angular/core';
import { Address, Person, SearchService } from "../services";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit, OnDestroy {

  person: Person;
  editName: string;
  editPhone: string;
  editAddress: Address;
  sub: Subscription;

  
  constructor(    private _actroute: ActivatedRoute,
                  private _router: Router,
                  private _service: SearchService) {

  }

  ngOnInit() {
    this.sub = this._actroute.params.subscribe(params => {
      const id = + params['id'];
      this._service.get(id).subscribe(person => {
        if(person) {
          this.editName = person.name;
          this.editPhone = person.phone;
          this.editAddress = person.address;
          this.person = person;
        } else 
          this.gotoList();
      })
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    if(this.person)
      this._router.navigate(['/search', {term: this.person.name}]);
    else 
      this._router.navigate(['/search']);
  }

  save(){
    this.person.name = this.editName;
    this.person.phone = this.editPhone;
    this.person.address = this.editAddress;
    this._service.save(this.person);
    this.gotoList();
  }

  cancel() {
    this._router.navigate(['/search']);
  }

}
