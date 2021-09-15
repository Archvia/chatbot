import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private heroesUrl = 'http://localhost:8080/test';

  constructor(private http: HttpClient) { }

  getTopics() {
    return this.http.get(this.heroesUrl);
  }
}
