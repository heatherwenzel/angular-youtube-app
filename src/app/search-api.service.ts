import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

  apikey: string = "AIzaSyBZbA1M4VUqo2Hu0RmeQnGso0Zut-3S9qE";

  constructor(private http: HttpClient) { }

  getSearchData(usersearch: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${usersearch}type=video&key=${this.apikey}`);
  }

  getVideoData(videoid: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid}&key=${this.apikey}`);
  }
}
