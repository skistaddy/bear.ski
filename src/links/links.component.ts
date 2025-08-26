import { Component } from '@angular/core';
import { PageComponent } from "../components/page/page.component";
import { LinksPage } from "../pages/links/links.component";

@Component({
  selector: 'app-links',
  imports: [PageComponent, LinksPage],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {

}
