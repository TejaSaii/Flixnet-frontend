import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { ShowIdService } from '../../services/show-id.service';
import { CommonModule } from '@angular/common';
import { TotalPagesService } from '../../services/total-pages.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  page: number = 1;
  showId: string = '';
  totalPages: number = 1;
  constructor(private pageService: PageService, private showIdService: ShowIdService ,
    private totalPagesService: TotalPagesService) { }

  ngOnInit(): void {
    this.pageService.page.subscribe(data => this.page = data);
    this.showIdService.showId.subscribe(data => this.showId = data);
    this.totalPagesService.totalPages.subscribe(data => this.totalPages = data);
  }

  incrementPage() {
    if(this.page !== this.totalPages)
    this.pageService.changePage(this.page + 1);
  }

  decrementPage() {
    if (this.page !== 1)
      this.pageService.changePage(this.page - 1);
  }
  
  goBack() {
    this.showIdService.changeShowId('');
  }
}
