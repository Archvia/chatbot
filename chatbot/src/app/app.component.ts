import { Component } from '@angular/core';
import { FaqService } from 'src/services/faq.service';
import { HttpClient } from '@angular/common/http';
import { Topic } from 'src/models/topic';

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
    var response = this.faqService.postMessage(s);
    response.subscribe(resultObj => {
      var result = resultObj as {res: Topic[]};
      var topics = result.res;
      var messages = topics.map(topic => topic.message)
      if(messages.length == 0){
        this.data.push('Sorry I did not understand that, you can ask me about:...');
      }
      else if(messages.length > 1){
        this.data = this.data.concat(messages);
      }
      else if(messages.length > 0){
        this.data.push(messages[0]);
      }
    })
  }

}
