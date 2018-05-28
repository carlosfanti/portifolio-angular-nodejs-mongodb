import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() educations: any[];

  constructor() { }

  ngOnInit() { }

}
