import { Component, OnInit } from '@angular/core';
import { SearchApiService } from '../search-api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  showOne: boolean = false;
  showTwo: boolean = false;
  showThree: boolean = false;
  showFour: boolean = false;
  showFive: boolean = false;
  searchResults: any; //contains all of the search result responses
  searchArray: any[] = []; //contains an array of all the search results
  videoids: any[] = []; //contains an array of all of the search responses' ids
  videoid: string; //holds the current videoid
  videoData: any; //contains the data response

  constructor(private apiService: SearchApiService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.apiService.loadYouTube().subscribe(response => {
      this.searchResults = response;
            for (let i=0; i<5; i++) {
        this.videoids.push(this.searchResults.items[i].id.videoId);
      }
      this.videoid = this.videoids[0];
      this.apiService.getVideoData(this.videoid).subscribe(response => {
        this.videoData = response;
      });
      this.showOne = !this.showOne;
    });
  }

  async getSearchResults(form) {
    this.videoids.length = 0;
    this.searchResults = await this.apiService.getSearchData(form.value.search).toPromise();
    this.searchArray = this.searchResults.items;
    console.log(this.searchArray);
    for (let i=0; i<5; i++) {
      this.videoids.push(this.searchResults.items[i].id.videoId);
    }
    this.showOne = true;
  }

  videoOne($event) {
    this.showOne = !this.showOne;
    this.showTwo = false;
    this.showThree = false;
    this.showFour = false;
    this.showFive = false;
    this.videoid = this.videoids[0];
    this.apiService.getVideoData(this.videoid).subscribe(response => {
      this.videoData = response;
    });
  }

  getVideoOne() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoids[0]);
  }

  videoTwo($event) {
    this.showTwo = !this.showTwo;
    this.showOne = false;
    this.showThree = false;
    this.showFour = false;
    this.showFive = false;
    this.videoid = this.videoids[1];
    this.apiService.getVideoData(this.videoid).subscribe(response => {
      this.videoData = response;
    });
  }

  getVideoTwo() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoids[1]);
  }

  videoThree($event) {
    this.showThree = !this.showThree;
    this.showOne = false;
    this.showTwo = false;
    this.showFour = false;
    this.showFive = false;
    this.videoid = this.videoids[2];
    this.apiService.getVideoData(this.videoid).subscribe(response => {
      this.videoData = response;
    });
  }

  getVideoThree() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoids[2]);
  }

  videoFour($event) {
    this.showFour = !this.showFour;
    this.showOne = false;
    this.showTwo = false;
    this.showThree = false;
    this.showFive = false;
    this.videoid = this.videoids[3];
    this.apiService.getVideoData(this.videoid).subscribe(response => {
      this.videoData = response;
    });
  }

  getVideoFour() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoids[3]);
  }

  videoFive($event) {
    this.showFive = !this.showFive;
    this.showOne = false;
    this.showTwo = false;
    this.showThree = false;
    this.showFour = false;
    this.videoid = this.videoids[4];
    this.apiService.getVideoData(this.videoid).subscribe(response => {
      this.videoData = response;
    });
  }

  getVideoFive() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoids[4]);
  }

}
