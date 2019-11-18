import { Component, OnInit } from '@angular/core';
import { Person, SearchService } from "../services";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  searchResults: any;

  constructor(private _searchService: SearchService) { }

  ngOnInit() {
  }

  search(): void {
    this._searchService.search(this.query).subscribe(
      data => { this.searchResults = data },
      error => {console.log(error) }
    )
  }

}
