import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { LanguagesComponent } from './languages/languages.component';
import { SkillComponent } from './skill/skill.component';
import { CurriculumComponent } from './curriculum.component';
import { CoursesComponent } from './courses/courses.component';
import { CurriculumRoutingModule } from './curriculum-routing.module';

import { CurriculumService } from './curriculum.service';

@NgModule({
  imports: [
    CommonModule,
    CurriculumRoutingModule
  ],
  declarations: [
    CurriculumComponent,
    EducationComponent, 
    ExperienceComponent, 
    LanguagesComponent, 
    SkillComponent, 
    CoursesComponent
  ],
  providers: [
    CurriculumService
  ],
  exports: [
    CurriculumComponent
  ]
})
export class CurriculumModule { }
