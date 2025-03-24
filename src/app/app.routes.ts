import { Routes } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ContributeComponent } from "../contribute/contribute.component";
import { NotFoundComponent } from "../notfound/notfound.component";

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "contribute", component: ContributeComponent },
    { path: "**", component: NotFoundComponent }
];

