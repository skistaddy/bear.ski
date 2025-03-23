import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { PaletteService } from "../services/palette.service";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
    bg: string = "white";
    h: string = "black";
    l: string = "black";
    p: string = "black";

    constructor(private palette: PaletteService){
        this.bg = this.palette.bg();
        this.h = this.palette.h();
        this.l = this.palette.l();
        this.p = this.palette.p();
    }
}
