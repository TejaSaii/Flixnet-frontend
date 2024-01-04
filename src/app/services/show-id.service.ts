import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowIdService {
  private showIdData= new BehaviorSubject<string>('');
  showId = this.showIdData.asObservable();

  constructor() {}

  changeShowId(data: string) {
    this.showIdData.next(data);
  }
}
