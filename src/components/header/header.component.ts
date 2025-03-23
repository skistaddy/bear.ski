import { Component, input } from '@angular/core';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-header',
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    h = input("black");
    l = input("black");
}
