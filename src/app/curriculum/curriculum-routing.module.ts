import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurriculumComponent } from './curriculum.component'

const curriculumRoutes: Routes = [
  { path: 'curriculum',
    children: [
      { path: ':language', component: CurriculumComponent },
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
export class CurriculumRoutingModule { }
