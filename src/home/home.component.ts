import { Component, input, InputSignal } from '@angular/core';
import { NavComponent } from "../components/nav/nav.component";

@Component({
  selector: 'app-home',
  imports: [NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    backgroundColor = input();
    headerColor = input();
    links = input(["black", "black", "black"]);
}
