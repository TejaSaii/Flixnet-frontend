import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Video } from '../../types/Video';
import { NavbarComponent } from '../navbar/navbar.component';
import { VideoDetailService } from '../../services/video-detail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-detail',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './video-detail.component.html',
  styleUrl: './video-detail.component.css'
})
export class VideoDetailComponent implements OnInit{
  apiUrl = environment.apiUrl;
  details!: Video;

  constructor(private videoDetailService: VideoDetailService){
  }
 
  ngOnInit() : void {
    this.videoDetailService.videoDetail.subscribe(data => {
      this.details = data;
    });
  }
}
