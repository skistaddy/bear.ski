import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
    @Input() l: string = "black";
    @Input() h: string = "black";
    @Input() p: string = "black";
}
