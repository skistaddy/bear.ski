import { Component, input, InputSignal } from '@angular/core';
import { NavComponent } from "../components/nav/nav.component";
import { PaletteService } from "../services/palette.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    bg = "white";
    h = "black";
    l = "black";
    p = "black";
    acronym = input("bheck eif ai rknow");

    constructor(private palette: PaletteService){
        this.bg = this.palette.bg();
        this.h = this.palette.h();
        this.l = this.palette.l();
        this.p = this.palette.p();
    }
}
