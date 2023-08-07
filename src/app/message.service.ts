// src/app/message.service.ts

import { Injectable } from '@angular/core';
import { Message } from '../message'; // Import the Message interface

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: Message[] = [
    { id: 1, text: 'Hello, world!' },
    { id: 2, text: 'Angular is awesome!' },
    // ... Add more messages here
  ];

  getMessages(): Message[] {
    return this.messages;
  }

  getMessage(id: number): Message | undefined {
    return this.messages.find(message => message.id === id);
  }

  editMessage(id: number, newText: string): void {
    const message = this.getMessage(id);
    if (message) {
      message.text = newText;
    }
  }

  deleteMessage(id: number): void {
    const index = this.messages.findIndex(message => message.id === id);
    if (index !== -1) {
      this.messages.splice(index, 1);
    }
  }
}

