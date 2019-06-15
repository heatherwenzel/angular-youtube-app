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
  searchResults: any; //contains all of the search responses
  searchArray: any[] = []; //contains an array of all of the search responses
  videoids: any[] = []; //contains an array of all of the search responses' ids
  videoid: string;
  videoData: any; //contains the data response
  dangerousVideoUrl: string;
  videoUrl: any;

  constructor(private apiService: SearchApiService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    // this.updateVideoUrl(this.videoid);
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
      // console.log(this.videoids);
    });
  }

  async getSearchResults(form) {
    // console.log(form.value.search);
    this.videoids.length = 0;
    this.searchResults = await this.apiService.getSearchData(form.value.search).toPromise();
    // console.log(this.searchResults);
    this.searchArray = this.searchResults.items;
    console.log(this.searchArray);
    for (let i=0; i<5; i++) {
      this.videoids.push(this.searchResults.items[i].id.videoId);
    }
  }

  // updateVideoUrl(id: string) {
  //   this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
  //   this.videoUrl =
  //       this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  // }

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

}
