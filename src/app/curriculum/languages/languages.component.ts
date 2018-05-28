import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  @Input() languages: any[];

  constructor() { }

  ngOnInit() { }

}
