import { Component, OnInit } from '@angular/core';
import { SearchApiService } from '../search-api.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  searchResults: any;
  videoids: any[] = [];

  constructor(private apiService: SearchApiService) { }

  ngOnInit() {
  }

  getSearchResults(form) {
    this.apiService.getSearchData(form.value.search).subscribe(response => {
      this.searchResults = response;
      // console.log(this.searchResults);
      // console.log(this.searchResults.items[1].id.videoId);
      for (let i=0; i<5; i++) {
        this.videoids.push(this.searchResults.items[i].id.videoId);
      }
      console.log(this.videoids);
    });
  }

}
