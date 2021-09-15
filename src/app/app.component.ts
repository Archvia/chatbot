import { Component } from '@angular/core';
import { FaqService } from 'src/services/faq.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'chatbot';

  constructor(private faqService: FaqService){}

  private heroesUrl = 'http://localhost:8080/test';
  data: string[] = ['Hello'];

  onClick(){
    var a = this.faqService.getTopics();
    a.subscribe(result => {
      this.data.push(JSON.stringify(result))
    });
  }

  onSend(s: string){
    this.data.push(s);
  }

}
