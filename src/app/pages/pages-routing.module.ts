import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowComponent } from './show/show.component';
import { ListComponent } from './list/list.component';

const pagesRoutes: Routes = [
  { path: 'portfolio',
    children: [
      { path: ':language', component: ListComponent },
      { path: ':language/:id', component: ShowComponent },
      { path: '', redirectTo: 'es', pathMatch: 'full' }
    ]
  },
];

// const pagesRoutes: Routes = [
//   { path: 'portfolio',
//     children: [
//       { path: ':language', component: ListComponent,
//       children: [
//         { path: ':id', component: ShowComponent }
//       ] },
//       { path: '', redirectTo: 'es', pathMatch: 'full' }
//     ]
//   },
// ];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
