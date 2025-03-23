import { Injectable, input } from '@angular/core';
import chroma from "chroma-js";

function saturate(x: any){
    return x.set("hsl.s", 1).set("hsl.l", 0.45).hex()
}

@Injectable({
  providedIn: 'root'
})
export class PaletteService {
    private saturate(x: any){
        return x.set("hsl.s", 1).set("hsl.l", 0.45).hex()
    }

    private base = chroma.random();

    bg(): any {
        return saturate(this.base);
    }

    h(): any {
        return saturate(
            this.base.set("hsl.h", this.base.get("hsl.h") + 120)
        );
    }

    p(): any {
        return chroma.contrast(this.base, 'white') > 4.5 ? 'white' : 'black';
    }

    l(): any {
        return saturate(
            this.base.set("hsl.h", this.base.get("hsl.h") + 240)
        );
    }
}
