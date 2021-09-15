import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() messages: string[] = [];
  @Output() sendMessage = new EventEmitter<string>();

  newMessage: string = '';
  ngOnInit(): void {

  }

  onSend(){
    this.sendMessage.emit(this.newMessage);
    this.newMessage='';
  }

}
