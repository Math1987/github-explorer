import { RepositoriesFiltersForm } from '@/app/shared/models/repositories.filters.form.model';
import { RepositoriesFilters } from '@/app/shared/models/repositories.filters.model';
import { Component, OnDestroy, output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-repositories-filters',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './repositories-filters.component.html',
  styleUrl: './repositories-filters.component.scss'
})
export class RepositoriesFiltersComponent implements OnDestroy{

  destroy$ = new Subject<void>();
  formGroup!: FormGroup<RepositoriesFiltersForm>;
  filter = output<RepositoriesFilters>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  initFormGroup(){}

  updateFilters(value: RepositoriesFilters){}

  ngOnDestroy(): void {}

}
