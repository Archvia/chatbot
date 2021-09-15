import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getTopics() {
    return this.http.get(this.baseUrl);
  }

  postMessage(message: string){
    console.log('posting..')
    return this.http.post(this.baseUrl, { "message": message});
  }
}
