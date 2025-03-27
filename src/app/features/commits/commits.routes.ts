import { Routes } from "@angular/router";
import { CommitsComponent } from "./commits.component";

export const routes: Routes = [
  {
    path: ':owner/:repo',
    component: CommitsComponent
  }
]