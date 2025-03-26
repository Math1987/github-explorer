import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoriesComponent } from './repositories.component';
import { routes } from './repositories.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RepositoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RepositoriesModule {
  constructor(){
    console.log('ok')
  }
}
