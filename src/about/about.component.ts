import { Component } from '@angular/core';
import { PageComponent } from "../components/page/page.component";
import { AboutPage } from "../pages/about/about.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PageComponent, AboutPage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
   
}
