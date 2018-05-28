import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact.component';

const curriculumRoutes: Routes = [
  { path: 'contact',
    children: [
      { path: ':language', component: ContactComponent },
      { path: '', redirectTo: 'es', pathMatch: 'full' }
    ]
  },
  // 
];

@NgModule({
  imports: [
    RouterModule.forChild(curriculumRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }
