import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesService } from './pages.service';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    ListComponent,
    ShowComponent
  ],
  providers: [ PagesService ],
  exports: [
    ListComponent
  ]
})
export class PagesModule { }
