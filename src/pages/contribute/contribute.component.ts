import { Component, ViewChild, ElementRef } from '@angular/core';
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
    @ViewChild("bearinput") inputRef: ElementRef = {} as ElementRef;

    constructor(private http: HttpClient) {
    }

    submit(value: string): any {
        this.http
            .post("/submit", {body: value})
            .subscribe(res => {
                console.log("sucess!")
                this.inputRef.nativeElement.placeholder = "success!"
            }, err => { 
                console.log(err)
                this.inputRef.nativeElement.placeholder = "oops!"
            })
    }

    check(input: string): void {
        this.inputRef.nativeElement.value = "";
        this.submit(input)
    }
}
