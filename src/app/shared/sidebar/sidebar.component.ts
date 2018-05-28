import { Component, Input } from '@angular/core';
import { Globals } from '../../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  loaded: boolean = false;
  @Input() language: string;
  subtitle: any = [];
  portfolio: any = [];
  curriculum: any = [];
  contact: any = [];
  

  constructor( ) {
    this.initialize();
  }

  initialize() {
    this.loaded = false;
    this.subtitle["en"] = "Web Programmer";
    this.subtitle["es"] = "Programador Web";
    this.subtitle["pt"] = "Programador Web";
    this.portfolio["en"] = "Posts";
    this.portfolio["es"] = "Publicaciones";
    this.portfolio["pt"] = "Postagens";
    this.curriculum["en"] = "Curriculum";
    this.curriculum["es"] = "Curriculum";
    this.curriculum["pt"] = "Curriculo";
    this.contact["en"] = "Contact";
    this.contact["es"] = "Contacto";
    this.contact["pt"] = "Contato";   
    this.loaded = true; 
  }

}
