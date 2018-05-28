import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Contact, ContactLangTextMock } from './contact';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService {
  contact: Contact[];

  constructor( private http: HttpClient ) { }

  addContact(newContact: Contact) {
    const body = JSON.stringify(newContact);
    return this.http.post('/api/contact/', body, httpOptions);
  }

  getContactsLang() {
    return this.http.get<ContactLangTextMock>(`assets/contactLang.json`);
  }

}
