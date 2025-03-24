import { Component } from '@angular/core';
import { PageComponent } from "../components/page/page.component";
import { ContributePage } from "../pages/contribute/contribute.component";

@Component({
  selector: 'app-contribute',
  imports: [PageComponent, ContributePage],
  templateUrl: './contribute.component.html',
  styleUrl: './contribute.component.scss'
})
export class ContributeComponent {

}
