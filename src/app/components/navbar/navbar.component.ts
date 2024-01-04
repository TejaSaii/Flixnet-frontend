import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { KeywordService } from '../../services/keyword.service';
import { TypeService } from '../../services/type.service';
import { ShowIdService } from '../../services/show-id.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  @Input() isHomePage: boolean = false;
  showId: string = "";
  keyword: string = "";

  constructor(private keywordSerice: KeywordService, private typeService: TypeService,
    private showIdService: ShowIdService) { }

  ngOnInit(): void {
    this.showIdService.showId.subscribe(data => this.showId = data);
  }


  onSearch() {
    this.keywordSerice.changeKeyword(this.keyword);
  }

  onMoviesClick() {
    this.typeService.changeType('movie');
    this.showIdService.changeShowId('');
  }

  onTvshowsClick() {
    this.typeService.changeType('tvshow');
    this.showIdService.changeShowId('');
  }

  onDashboardClick() {
    this.typeService.changeType('');
    this.keywordSerice.changeKeyword('');
    this.showIdService.changeShowId('');
  }

  logOut(): void {
    localStorage.removeItem('token');
  }
}
