import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
import $ from 'jquery';

@Component({
  selector: 'app-cv-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() courses: any[];
  @Input() keywords: any[];
  
  constructor() {  }

  ngOnInit() {  }

  onClickCourse(kw: String){
    $('.coursesItens').addClass('d-none');
    $('.courses_'+kw).removeClass('d-none');
    $('.navCourse-item').removeClass('active');
    $(this).addClass('active');
  }

}
