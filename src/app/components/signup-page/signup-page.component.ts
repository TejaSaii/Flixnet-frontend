import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SignupContentComponent } from "../signup-content/signup-content.component";

@Component({
    selector: 'app-signup-page',
    standalone: true,
    templateUrl: './signup-page.component.html',
    styleUrl: './signup-page.component.css',
    imports: [NavbarComponent, SignupContentComponent]
})
export class SignupPageComponent {

}
