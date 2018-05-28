import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Curriculum, Curriculuns } from './curriculum';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CurriculumService {
  
  constructor( private http: HttpClient ) { }

  getCurriculums() {
    return this.http.get<Curriculuns>(`/api/curriculum`);
  }

  // getCurriculumsMock() {
  //   return this.http.get<Curriculuns>(`assets/mock-cv.json`);
  // }

  // readCurriculum(id) {
  //   return this.http.get<Curriculuns>(`/api/curriculum/${id}`);
  // }

  // addCurriculum(newCurriculum: Curriculuns) {
  //   const body = JSON.stringify(newCurriculum);
  //   return this.http.post('/api/curriculum/', body, httpOptions);
  // }

  // deleteCurriculum(id) {
  //   return this.http.delete(`/api/curriculum/${id}`);
  // }
  // updateCurriculum(newCurriculum: Curriculuns) {
  //   const body = JSON.stringify(newCurriculum);
  //   return this.http.put('/api/curriculum/' + newCurriculum._id, body, httpOptions);
  // }

}
