import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommitsComponent } from './commits.component';
import { routes } from './commits.routes';
import { CommitsFiltersComponent } from './commits-filters/commits-filters.component';
import { CommitsTableComponent } from './commits-table/commits-table.component';



@NgModule({
  declarations: [
    CommitsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommitsFiltersComponent,
    CommitsTableComponent
  ]
})
export class CommitsModule { }
