import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContentComponent } from '../content/content.component';
import { KeywordService } from '../../services/keyword.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { ShowIdService } from '../../services/show-id.service';
import { VideoDetailComponent } from '../video-detail/video-detail.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, ContentComponent, CommonModule, FooterComponent, VideoDetailComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  showId: string = '';
  isHomePage: boolean = true;
  keyword: string = "";
  constructor(private keywordService: KeywordService, private showIdService: ShowIdService) { }

  ngOnInit(): void {
    this.keywordService.keyword.subscribe(data => {
      this.keyword = data;
    })
    this.showIdService.showId.subscribe(data => {
      this.showId = data;
    })
  }

}
