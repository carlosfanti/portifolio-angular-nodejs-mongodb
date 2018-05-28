import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact, ContactLangText, ContactLangTextMock } from './contact';
import { ContactService } from './contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  language: any;
  contactLangText: ContactLangText;
  contactLangMock: ContactLangTextMock;
  
  loaded: boolean = false;
  model: Contact;
  submitted = false;
  result: any;

  constructor( 
    private _contactService: ContactService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe( res => {
      this.language = res.language;
      this.changeLanguage();
    })
   }

  ngOnInit() { }

  changeLanguage(): any {
    this.loaded = false;
    this.model = new Contact();

    this._contactService.getContactsLang().subscribe(
      data => {
        this.contactLangMock = data;
        // console.log(data);
        this.contactLangText = this.contactLangMock[this.language];
        this.loaded = true;
      },
      err => console.error(err)
    );
  }

  onSubmit() { 
    this._contactService.addContact(this.model).subscribe(
      data => {
        this.submitted = true; 
      },
      err => console.error(err)
    );
    
  }

}
