import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private typeData= new BehaviorSubject<string>('');
  type = this.typeData.asObservable();

  constructor() {}

  changeType(data: string) {
    this.typeData.next(data);
  }
}
