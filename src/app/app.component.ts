import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
    private http = inject(HttpClient);
/*
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
*/
}
