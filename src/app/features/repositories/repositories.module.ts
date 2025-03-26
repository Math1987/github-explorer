import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoriesComponent } from './repositories.component';
import { routes } from './repositories.routes';
import { RouterModule } from '@angular/router';
import { RepositoriesFiltersComponent } from './repositories-filters/repositories-filters.component';
import { RepositoriesTableComponent } from './repositories-table/repositories-table.component';


@NgModule({
  declarations: [
    RepositoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RepositoriesFiltersComponent,
    RepositoriesTableComponent
  ]
})
export class RepositoriesModule {
  constructor(){
    console.log('ok')
  }
}
