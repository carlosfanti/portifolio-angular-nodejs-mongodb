import { Component, OnInit } from '@angular/core';

import { Curriculum, Curriculuns } from './curriculum';
import { CurriculumService } from './curriculum.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  
  language: string;
  curriculuns: Curriculuns;
  curriculum: Curriculum;
  loaded: boolean;
  result: any;

  constructor( 
    private _curriculumService: CurriculumService,
    private route: ActivatedRoute,
    private router: Router
   ) { 
     this.route.params.subscribe( res => {
       this.language = res.language;
       this.initialize();
     });
     this.curriculum = null;
    }

  initialize(): any {
    this.loaded = false;
    this._curriculumService.getCurriculums().subscribe(
      data => {
        this.curriculuns = data[0];
        if( this.curriculuns.languages.indexOf(this.language) != -1 ){
          this.curriculum = this.curriculuns.curriculum[this.curriculuns.languages.indexOf(this.language)];
        }else{
          this.router.navigate(['curriculum/'+this.curriculuns.languages[0]]);
          this.curriculum = this.curriculuns.curriculum[0];
        }
        this.loaded = true;
      },
      err => console.error(err)
    );
  }

  ngOnInit() { }

}
