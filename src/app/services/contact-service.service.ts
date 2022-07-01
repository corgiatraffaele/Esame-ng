import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  constructor(
    private http: HttpClient
  ) { }

  getContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>('api/contacts');
  }

  //prendi un contatto selezionato per id
  getContact(id: number) : Observable<Contact> {
    return this.http.get<Contact>(`api/contacts/${id}`);
  }

  //aggiorna il valore di un contatto
  updateContact(contact: Contact) :Observable<Contact>{
    return this.http.put<Contact>('api/contacts', contact);
  }
  addContact(contact: Contact) :Observable<Contact>{
    return this.http.post<Contact>('api/contacts',contact);
  }

  deleteContact(id: number):Observable<Contact>{
    return this.http.delete<Contact>('api/contacts/' + id);
  }
}
