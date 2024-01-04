import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private pageData= new BehaviorSubject<number>(1);
  page = this.pageData.asObservable();

  constructor() {}

  changePage(data: number) {
    this.pageData.next(data);
  }
}
