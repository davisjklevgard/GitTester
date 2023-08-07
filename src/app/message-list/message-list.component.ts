import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../../message';



@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
[x: string]: any;

messages: Message[] = [];


  editMessage(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deleteMessage(id: number) {
    this.router.navigate(['/delete', id]);
  }


  constructor(private messageService: MessageService, private router: Router) {}


  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }

}
