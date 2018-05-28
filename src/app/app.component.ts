import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  
 
  title = 'app';
  language: String;
  urlToGo: String[];

  constructor( 
    private _globals: Globals,
    private _route: ActivatedRoute,
    private _router: Router  
  ) {  }

  ngOnInit() {
    this._globals.languageSet('es');
    this.language = 'es';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onSelectLanguage(language: String) {
    this._globals.languageSet(language);
    this.language = language;
    this.urlToGo = this._router.url.split("/");
    // console.log(this.urlToGo);
    this.urlToGo[2] = this.language;
    // console.log(this.urlToGo);
    this._router.navigate(this.urlToGo);
  }
}
