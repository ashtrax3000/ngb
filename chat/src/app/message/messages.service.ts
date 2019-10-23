import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Message } from './message.model';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { filter, scan, publishReplay, refCount } from "rxjs/operators";

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  constructor() {
    this.messages = this.updates
      // match the updates and accumulate operations on the messages
      .pipe(
        scan((messages: Message[], operation: IMessagesOperation) => {
              return operation(messages);
        }, initialMessages ),
        publishReplay(1),
        refCount()
      )
  }

  updates: Subject<any> = new Subject<any>();

  //emits individual Messages
  newMessages: Subject<Message> = new Subject<Message>();

  //emits an Array of the most recent Messages
  messages: Observable<Message[]>; 

  addMessage(message: Message): void {
    this.newMessages.next(message);
  }

  messagesForThreadUser(thread: Thread, user: User): Observable<Message> {
    return this.newMessages.pipe(
      filter( (message: Message) => {
        return (message.thread.id === thread.id) &&
               (message.author.id !== user.id)
      })
    )
  }

}
