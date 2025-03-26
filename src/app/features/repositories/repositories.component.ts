import { RepositoriesFilters } from '@/app/shared/models/repositories.filters.model';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss',
  standalone: false
})
export class RepositoriesComponent {

  search = signal<RepositoriesFilters>({});

  filter(filters: RepositoriesFilters){
    this.search.set(filters);
  }

}
