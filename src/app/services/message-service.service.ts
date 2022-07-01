import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from '../models/answer';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getMessages(): Observable<Message[]>{
    return this.http.get<Message[]>('api/messages');
  }

  addMessage(message: Message): Observable<Message>{
    return this.http.post<Message>('api/messages', message);
  }

  
  getRandomMessage(): Observable<Answer>{
    let x = Math.floor((Math.random() * 100) + 1);
    return this.http.get<Answer>(`api/answers/${x}`);
  }

}
