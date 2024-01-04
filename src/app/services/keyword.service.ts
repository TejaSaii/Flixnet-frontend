import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {
  private searchData = new BehaviorSubject<string>('');
  keyword = this.searchData.asObservable();

  constructor() {}

  changeKeyword(data: string) {
    this.searchData.next(data);
  }
}
