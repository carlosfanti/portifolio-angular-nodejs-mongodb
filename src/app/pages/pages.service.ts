import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Page } from './page.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PagesService {
  pages: Page[];
  
  constructor( private http: HttpClient ) { }

  getPages() {
    return this.http.get<Page[]>(`/api/post`);
  }

  // getPagesMock() {
  //   return this.http.get<Page[]>(`assets/mock-pages.json`);
  // }
  
  readPage(id) {
    return this.http.get<Page>(`/api/post/${id}`);
  }

  // addPage(newPage: Page) {
  //   const body = JSON.stringify(newPage);
  //   return this.http.post('/api/post/', body, httpOptions);
  // }

}
