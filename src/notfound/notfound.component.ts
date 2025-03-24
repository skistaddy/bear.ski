import { Component } from '@angular/core';
import { PageComponent } from "../components/page/page.component";
import { NotFoundPage } from "../pages/notfound/notfound.component";

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [PageComponent, NotFoundPage],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotFoundComponent {

}
