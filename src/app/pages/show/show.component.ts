import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Page } from '../page.interface';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-pages-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers: [PagesService]
})
export class ShowComponent implements OnInit {
  page: Page;
  pages: Page[];
  id: string;
  language: string;
  loaded: boolean;
  found: boolean;

  pageText: any = {};

  constructor(
    private _pagesService: PagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.pageText["en"] = "Page not found...";
    this.pageText["es"] = "Pagina no encontrado...";
    this.pageText["pt"] = "Pagina nao encontrado...";
    
    this.route.params.subscribe(res => {
      this.id = res.id;
      this.language = res.language;
      this.getPageDetail();
    });
    
  }

  ngOnInit() { }

  getPageDetail() {
    this.loaded = false;
    this.found = false;
    this._pagesService.readPage(this.id).subscribe(
      data => {
        this.loaded = true;
        this.page = data;
        this.found = true;
      },
      err => console.error(err)
    );
  }

}
