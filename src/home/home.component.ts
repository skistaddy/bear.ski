import { Component, inject } from '@angular/core';
import { NavComponent } from "../components/nav/nav.component";
import { PaletteService } from "../services/palette.service";
import { HttpClient } from '@angular/common/http';

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
    acronym = "bheck eif ai rknow";
    
    private http = inject(HttpClient);

    constructor(private palette: PaletteService){
        this.bg = this.palette.bg();
        this.h = this.palette.h();
        this.l = this.palette.l();
        this.p = this.palette.p();

        this.http.get('bear.txt', { responseType: 'text' })
            .subscribe(
                (data: any) => {
                    const fmt = data.split("\n").filter((x: any) => x)
                    console.log(fmt)
                    this.acronym = fmt[Math.floor(Math.random() * fmt.length)]
                        
                },
                (error: any)  => console.error('Error loading text file:', error)
            );
    }

}
