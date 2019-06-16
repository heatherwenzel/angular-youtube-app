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
  searchResults: any; //contains all of the search api call responses
  searchArray: any[] = []; //contains an array of all the search results
  videoids: any[] = []; //contains an array of all of the search results' ids
  videoid: string; //holds the current videoid
  videoData: any; //contains all of the data api call responses

  constructor(private apiService: SearchApiService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    //makes the initial search api call on window load
    this.apiService.loadYouTube().subscribe(response => {
      this.searchResults = response;
      //pushes all of the videoids from the search api call into the videoids array
      for (let i=0; i<5; i++) {
        this.videoids.push(this.searchResults.items[i].id.videoId);
      }
      //sets the initial videoid to the first video from the search results
      this.videoid = this.videoids[0];
      //makes the initial data api call
      this.apiService.getVideoData(this.videoid).subscribe(response => {
        this.videoData = response;
      });
      //shows the first video and its information on load
      this.showOne = !this.showOne;
    });
  }

  //calls the search api and data api when the search button is clicked, with the search form as its parameter
  async getSearchResults(form) {
    //resets the array of videoids
    this.videoids.length = 0;
    //calls the search api
    this.searchResults = await this.apiService.getSearchData(form.value.search).toPromise();
    this.searchArray = this.searchResults.items;
    //adds all of the videoids from the search api call into the videoids array
    for (let i=0; i<5; i++) {
      this.videoids.push(this.searchResults.items[i].id.videoId);
    }
    //shows the first video with its corresponding information
    this.showOne = true;
  }

  //shows video one when its corresponding button is clicked, and hides the other videos and data if they are showing
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

  //sanitizes the url for video one so it can be inserted in the iframe
  getVideoOne() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoids[0]);
  }

  //shows video two when its corresponding button is clicked, and hides the other videos and data if they are showing
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

  //sanitizes the url for video two so it can be inserted in the iframe
  getVideoTwo() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoids[1]);
  }

  //shows video three when its corresponding button is clicked, and hides the other videos and data if they are showing
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

  //sanitizes the url for video three so it can be inserted in the iframe
  getVideoThree() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoids[2]);
  }
  
  //shows video four when its corresponding button is clicked, and hides the other videos and data if they are showing
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

  //sanitizes the url for video four so it can be inserted in the iframe
  getVideoFour() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoids[3]);
  }

  //shows video five when its corresponding button is clicked, and hides the other videos and data if they are showing
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

  //sanitizes the url for video five so it can be inserted in the iframe
  getVideoFive() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoids[4]);
  }

}
