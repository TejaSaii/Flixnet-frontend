import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalPagesService {
  private totalPageData= new BehaviorSubject<number>(1);
  totalPages = this.totalPageData.asObservable();

  constructor() {}

  changeTotalPages(data: number) {
    this.totalPageData.next(data);
  }
}
