import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

  apikey: string = "AIzaSyBZbA1M4VUqo2Hu0RmeQnGso0Zut-3S9qE";

  constructor(private http: HttpClient) { }

  //makes the initial api call for 5 movie trailers on window load
  loadYouTube() {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=amazon%20studios%20trailer&type=video&key=${this.apikey}`);
  }

  //makes the search api call based on the user's search term
  getSearchData(usersearch: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${usersearch}&type=video&key=${this.apikey}`);
  }

  //makes the data api call based on the videoid pulled from the search api call
  getVideoData(videoid: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid}&key=${this.apikey}`);
  }
}
