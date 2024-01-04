import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Video } from '../types/Video';

@Injectable({
  providedIn: 'root'
})
export class VideoDetailService {
  private videoData = new BehaviorSubject<Video>({
      show_id: '',
      type: '',
      title: '',
      director: '',
      country: '',
      date_added: '',
      release_year: 0,
      rating: '',
      duration: '',
      listed_in: '',
      description: ''
  });
  videoDetail = this.videoData.asObservable();

  constructor(){};

  changeVideoDetail(data: Video) {
    this.videoData.next(data);
  }
}
