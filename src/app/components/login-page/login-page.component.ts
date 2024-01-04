import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginContentComponent } from '../login-content/login-content.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NavbarComponent, LoginContentComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
