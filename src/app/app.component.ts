import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import chroma from "chroma-js";

function gen() {
    let base = chroma.random().set("hsl.s", 1);
    let complement = base.set("hsl.h", base.get("hsl.h") + 180);
    const baseL = chroma(base).luminance()
    const compL = chroma(complement).luminance()

    if(chroma.contrast(base, complement) < 7){
        gen();
    }
    
    if(baseL < compL){
        return [complement, base]
    } else {
        return [base, complement]
    }
}

function palify(){
    let lums = chroma.scale(gen()).mode("hsl").colors(5);
    lums = lums.map((x: any) => [chroma(x).luminance(), x])
    console.log(lums)
    lums.sort((a: any, b: any) => {
        return a[0] - b[0]
    })
    return lums.map((x: any) => x[1])
}

let palette = palify()

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
    backgroundColor = palette[0];
    links = signal<string[]>(palette.slice(1, 4));
    headerColor = palette[4];
}
