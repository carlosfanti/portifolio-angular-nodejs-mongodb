import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() experiences: any[];

  constructor() { }

  ngOnInit() { }

}
