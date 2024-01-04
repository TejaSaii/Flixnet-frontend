import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoTileComponent } from '../video-tile/video-tile.component';
import { Video } from '../../types/Video';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VideoRes } from '../../types/VideoRes';
import { KeywordService } from '../../services/keyword.service';
import { TypeService } from '../../services/type.service';
import { PageService } from '../../services/page.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [VideoTileComponent, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  apiUrl = environment.apiUrl;
  videos: Video[] = [];
  notFound: boolean = false;
  keyword: string = "";
  type: string = "";
  pages: number = 1;
  url: string = `${this.apiUrl}/app/videos`;
  params: string[] = [];
  combinedParam: string = '';

  constructor(private http: HttpClient, 
    private keywordService: KeywordService, 
    private typeService: TypeService,
    private pageService: PageService) {

    this.getVideos(this.url);
  }
  ngOnInit(): void {
    this.keywordService.keyword.subscribe(keyword => {
      this.keyword = keyword;
      this.fillParams();
    });
    this.typeService.type.subscribe(type => {
      this.type = type
      this.fillParams();
    });

    this.pageService.page.subscribe(page => {
      this.pages = page;
      this.fillParams();
    })

  }

  fillParams() {
    this.params = [];
    if (this.type) {
      this.params.push(`type=${this.type}`);
    }
    if (this.keyword) {
      this.params.push(`keyword=${this.keyword}`);
    }
    if (this.pages) {
      this.params.push(`page=${this.pages}`);
    }
    if (this.params.length) {
      const combinedParam = this.params.join('&');
      this.getVideos(this.url+'?'+combinedParam);
    }
  }

  getVideos(url:string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-type': 'application/json'
    });

    this.http.get<VideoRes>(url, { headers }).subscribe({
      next: (v) => this.videos = v.result,
      error: () => this.notFound = true
    })
  }
}
