import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// import { ListComponent } from './pages/list/list.component';
// import { CurriculumComponent } from './curriculum/curriculum.component';
// import { ContactComponent } from './contact/contact.component';


// const appRoutes: Routes = [
//   { path: 'curriculum', component: CurriculumComponent, },
//   { path: 'portfolio', component: ListComponent, },
//   { path: 'contact', component: ContactComponent, },
//   { path: '**', redirectTo: 'portfolio', pathMatch: 'full' }
// ];

const appRoutes: Routes = [
  { path: '**', redirectTo: 'portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    { /* enableTracing: true */ } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

