import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommitsComponent } from './commits.component';
import { routes } from './commits.routes';



@NgModule({
  declarations: [
    CommitsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CommitsModule { }
