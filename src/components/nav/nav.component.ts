import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
    links = input<string[]>(["black", "black", "black"]);
}
