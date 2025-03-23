import { Component, Input } from '@angular/core';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    @Input() h: string = "black";
    @Input() l: string = "black";
    @Input() p: string = "black";
}
