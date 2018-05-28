import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { ContactModule } from './contact/contact.module';
import { PagesModule } from './pages/pages.module';
import { CurriculumModule } from './curriculum/curriculum.module';
import { AppRoutingModule } from './app-routing.module';

import { Globals } from './globals';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CurriculumModule,
    ContactModule,
    PagesModule,
    AppRoutingModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
