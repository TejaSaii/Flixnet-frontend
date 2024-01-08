import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../types/Video';

@Component({
  selector: 'app-video-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-tile.component.html',
  styleUrl: './video-tile.component.css'
})
export class VideoTileComponent implements OnInit{
  @Input() video!: Video;

  stringDate: string = '';

  options: any = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  constructor() {
  }

  ngOnInit(): void {
    if(this.video.date_added){
      const date = new Date(this.video.date_added);
      const formattedDate = date.toLocaleDateString('en-US', this.options);
      this.stringDate = formattedDate;
    }
  }

}
