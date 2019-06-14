import { Component, OnInit } from '@angular/core';
import { SearchApiService } from '../search-api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  searchResults: any;
  videoids: any[] = [];
  videoData: any;
  dangerousVideoUrl: string;
  // videoUrl: any;
  url: SafeResourceUrl;

  constructor(private apiService: SearchApiService, private sanitizer: DomSanitizer) { 
    this.url = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoids[0]);
  }

  ngOnInit() {
    // this.apiService.loadYouTube().subscribe(response => {
    //   this.searchResults = response;
    //         for (let i=0; i<5; i++) {
    //     this.videoids.push(this.searchResults.items[i].id.videoId);
    //   }
    //   console.log(this.videoids);
    // });
  }


  async getSearchResults(form) {
    // console.log(form.value.search);
    this.videoids.length = 0;
    this.searchResults = await this.apiService.getSearchData(form.value.search).toPromise();
    console.log(this.searchResults);
    for (let i=0; i<5; i++) {
      this.videoids.push(this.searchResults.items[i].id.videoId);
    }
    // console.log(this.videoids);
    let videoid = this.videoids[0];
    // console.log(videoid);
    this.videoData = await this.apiService.getVideoData(videoid).toPromise();
    console.log(this.videoData);
  }


  // getSearchResults(form) {
  //   console.log(form.value.search);
  //   this.videoids.length = 0;
  //   this.apiService.getSearchData(form.value.search).subscribe(response => {
  //     this.searchResults = response;
  //     console.log(this.searchResults);
  //     for (let i=0; i<5; i++) {
  //       this.videoids.push(this.searchResults.items[i].id.videoId);
  //     }
  //     console.log(this.videoids);
  //   });
  // }

  // updateVideoUrl(id: string) {
  //   this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
  //   this.videoUrl =
  //       this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  // }

}
