import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';

import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
