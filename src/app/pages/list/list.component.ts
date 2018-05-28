import { Component, OnInit } from '@angular/core';

import { PagesService } from '../pages.service';
import { Page } from '../page.interface';

import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [PagesService]
})

export class ListComponent implements OnInit {
  pages: Page[];
  pagesMock: Page[];
  allPages: Page[];
  loadedPages: boolean;
  locatedPages: boolean;
  pagination: Pagination;
  language: string;

  msgNoPost: string[] = [];
  result: any;

  constructor( 
    private _pagesService: PagesService,
    private route: ActivatedRoute
  ) {
    this.pagination = new Pagination;
    this.msgNoPost["en"] = "No posts";
    this.msgNoPost["es"] = "Sin publicaciones";
    this.msgNoPost["pt"] = "Sem postagens";
    
    this.route.params.subscribe( res => {
      this.language = res.language;
      this.initializePages();
    });
  }
  
  // submitMyPost(){
  //   console.log(this.allPages);
  //   this.allPages.forEach( p => {
  //     this._pagesService.addPage(p).subscribe(
  //       data => {
  //         this.result = data;
  //       },
  //       err => console.error(err)
  //     );
  //   }) 
  // }

  initializePages(): any {
    this.loadedPages = false;
    this.locatedPages = false;
    this._pagesService.getPages().subscribe(
      data => {
        this.loadedPages = true;
        if(data.length > 0){
          this.allPages = data;
          // this.allPages = this.pagesMock[this.language];
          this.locatedPages = true;
          this.generatePagination();
        }
      },
      err => console.error(err)
    );
  } 

  ngOnInit() { }

  generatePagination() {
    // console.log(this.allPages.length);
    this.pagination.totalItens = this.allPages.length;
    this.pagination.nPages = Math.ceil(this.pagination.totalItens / this.pagination.itensPerPage);
    
    this.renderItens();
  }

  refreshPagination() {
    switch (this.pagination.nPages) {
      case 1:
        this.pagination.p1 = 1;
        this.pagination.p1Class = "page-item active";
        this.pagination.p2Class = "d-none page-item disabled";
        this.pagination.p3Class = "d-none page-item disabled";
        this.pagination.nextClass = "page-item disabled";
        this.pagination.previousClass = "page-item disabled";
        break;
      case 2:
        this.pagination.p1 = 1;
        this.pagination.p2 = 2;
        this.pagination.p3Class = "d-none page-item disabled";
        if(this.pagination.actualPage == 1){
          this.pagination.p1Class = "page-item active";
          this.pagination.p2Class = "page-item";
          this.pagination.nextClass = "page-item";
          this.pagination.previousClass = "page-item disabled";
        }else{
          this.pagination.p1Class = "page-item";
          this.pagination.p2Class = "page-item active";
          this.pagination.nextClass = "page-item disabled";
          this.pagination.previousClass = "page-item";
        }
        break;
      case 3:
        this.pagination.p1 = 1;
        this.pagination.p2 = 2;
        this.pagination.p3 = 3;
        if(this.pagination.actualPage == 1){
          this.pagination.p1Class = "page-item active";
          this.pagination.p2Class = "page-item";
          this.pagination.p3Class = "page-item";
          this.pagination.nextClass = "page-item";
          this.pagination.previousClass = "page-item disabled";
        }else{
          if(this.pagination.actualPage == 2){
            this.pagination.p1Class = "page-item";
            this.pagination.p2Class = "page-item active";
            this.pagination.p3Class = "page-item";
            this.pagination.nextClass = "page-item";
            this.pagination.previousClass = "page-item";
          }else{
            this.pagination.p1Class = "page-item";
            this.pagination.p2Class = "page-item";
            this.pagination.p3Class = "page-item active";
            this.pagination.nextClass = "page-item disabled";
            this.pagination.previousClass = "page-item";
          }
        }
        break;
      default:
        if(this.pagination.actualPage == 1){
          this.pagination.p1 = this.pagination.actualPage;
          this.pagination.p2 = this.pagination.actualPage + 1;
          this.pagination.p3 = this.pagination.actualPage + 2;
          this.pagination.p1Class = "page-item active";
          this.pagination.p2Class = "page-item";
          this.pagination.p3Class = "page-item";
          this.pagination.nextClass = "page-item";
          this.pagination.previousClass = "page-item disabled";
        }else{
          if(this.pagination.actualPage == this.pagination.nPages){
            this.pagination.p1 = this.pagination.actualPage - 2;
            this.pagination.p2 = this.pagination.actualPage - 1;
            this.pagination.p3 = this.pagination.actualPage;
            this.pagination.p1Class = "page-item";
            this.pagination.p2Class = "page-item";
            this.pagination.p3Class = "page-item active";
            this.pagination.nextClass = "page-item disabled";
            this.pagination.previousClass = "page-item";
          }else{
            this.pagination.p1 = this.pagination.actualPage - 1;
            this.pagination.p2 = this.pagination.actualPage;
            this.pagination.p3 = this.pagination.actualPage + 1;
            this.pagination.p1Class = "page-item";
            this.pagination.p2Class = "page-item active";
            this.pagination.p3Class = "page-item";
            this.pagination.nextClass = "page-item";
            this.pagination.previousClass = "page-item";
          }
        }
        break;
    }
  }

  renderItens(){
    this.refreshPagination();
    
    let pagesStart = (this.pagination.actualPage-1)*this.pagination.itensPerPage;
    let pagesEnd = this.pagination.actualPage*this.pagination.itensPerPage;
    
    this.pages = this.allPages.slice(pagesStart, pagesEnd);
    this.loadedPages = true;
  }

  onChangePage(p: number){
    this.loadedPages = false;
    this.pagination.actualPage = p;
    this.renderItens();
  }

  onChangePagePrev(){
    this.loadedPages = false;
    this.pagination.actualPage = this.pagination.actualPage-1;
    this.renderItens();
  }

  onChangePageNext(){
    this.loadedPages = false;
    this.pagination.actualPage = this.pagination.actualPage+1;
    this.renderItens();
  }

}

class Pagination {
  loaded: boolean;
  itensPerPage: number = 6;
  actualPage: number = 1;
  nPages: number;
  totalItens: number;

  previousClass: string = "page-item disabled";
  nextClass: string = "page-item disabled";
  p1Class: string = "page-item";
  p2Class: string = "page-item";
  p3Class: string = "page-item";
  
  p1: number = 1;
  p2: number = 2;
  p3: number = 3;
  

}
