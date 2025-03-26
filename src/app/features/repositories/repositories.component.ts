import { RepositoriesFilters } from '@/app/shared/models/repositories.filters.model';
import { Component } from '@angular/core';

@Component({
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss',
  standalone: false
})
export class RepositoriesComponent {

  filter(filters: RepositoriesFilters){
    console.log('filters', filters);
  }

}
