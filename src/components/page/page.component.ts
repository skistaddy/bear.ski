import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PaletteService } from "../../services/palette.service";

@Component({
  selector: 'page-component',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {
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
