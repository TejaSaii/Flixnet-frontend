import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { KeywordService } from '../../services/keyword.service';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() isHomePage: boolean = false;
  keyword: string = "";

  constructor(private keywordSerice: KeywordService, private typeService: TypeService) { }

  onSearch() {
    this.keywordSerice.changeKeyword(this.keyword);
  }

  onMoviesClick() {
    this.typeService.changeType('movie');
  }

  onTvshowsClick() {
    this.typeService.changeType('tvshow');
  }

  onDashboardClick() {
    this.typeService.changeType('');
    this.keywordSerice.changeKeyword('');
  }

  logOut(): void {
    localStorage.removeItem('token');
  }
}
