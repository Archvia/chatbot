import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  @Input() messages: string[] = [];
  @Output() sendMessage = new EventEmitter<string>();

  newMessage: string = '';

  onSend(){
    this.sendMessage.emit(this.newMessage);
    this.newMessage='';
  }

}
