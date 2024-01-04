import { Component, OnInit} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContentComponent } from '../content/content.component';
import { KeywordService } from '../../services/keyword.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, ContentComponent, CommonModule, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  isHomePage: boolean = true;
  keyword: string = "";
  constructor(private keywordService: KeywordService){}

  ngOnInit(): void {
    this.keywordService.keyword.subscribe(data => {
      this.keyword = data;
    })
  }
}
