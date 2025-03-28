import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'contribute-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contribute.component.html',
  styleUrl: './contribute.component.scss'
})
export class ContributePage {
    bearinput: string = "";

    constructor(private http: HttpClient) {
        this.bearinput = "";
    }

    submit(value: string): any {
        this.http
            .post("/submit", {body: value})
            .subscribe(res => {
                console.log(res)
            }, err => {
                console.log(err)
            })
    }

    check(input: string): void {
        this.bearinput = "";
        this.submit(input)
    }
}
