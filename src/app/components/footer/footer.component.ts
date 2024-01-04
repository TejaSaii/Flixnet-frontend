import { Component } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  page:number = 1;
  constructor(private pageService: PageService){
  this.pageService.page.subscribe(data => this.page = data);
  }

  incrementPage(){
    this.pageService.changePage(this.page + 1);
  }

  decrementPage(){
    if(this.page !== 1)
    this.pageService.changePage(this.page - 1);
  }
}
