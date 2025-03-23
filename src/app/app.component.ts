import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';
import chroma from "chroma-js";

function saturate(x: any){
    return x.set("hsl.s", 1).set("hsl.l", 0.45).hex()
}

const bgV = chroma.random(); // background
const hV = bgV.set("hsl.h", bgV.get("hsl.h") + 120); // header
const lV = bgV.set("hsl.h", bgV.get("hsl.h") + 240); // links
const pV = chroma.contrast(bgV, 'white') > 4.5 ? 'white' : 'black';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
    bg = saturate(bgV);
    h = saturate(hV);
    l = saturate(lV);
    p = pV
    acronym: any;

    private http = inject(HttpClient);

    constructor() {
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
