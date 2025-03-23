import { Component, input, InputSignal } from '@angular/core';
import { NavComponent } from "../components/nav/nav.component";

@Component({
  selector: 'app-home',
  imports: [NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    bg = input("white");
    h = input("black");
    l = input("black");
    p = input("black");
    acronym = input("bheck eif ai rknow");
}
