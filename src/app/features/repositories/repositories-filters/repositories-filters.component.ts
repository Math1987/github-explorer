import { extractFilters } from '@/app/shared/adapters/repositories.filters.adapters';
import { RepositoriesFiltersForm } from '@/app/shared/models/repositories.filters.form.model';
import { RepositoriesFilters } from '@/app/shared/models/repositories.filters.model';
import { Component, OnDestroy, output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Subject, takeUntil, tap } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-repositories-filters',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './repositories-filters.component.html',
  styleUrl: './repositories-filters.component.scss'
})
export class RepositoriesFiltersComponent implements OnDestroy {

  destroy$ = new Subject<void>();
  formGroup!: FormGroup<RepositoriesFiltersForm>;
  filter = output<RepositoriesFilters>();

  constructor(private formBuilder: FormBuilder) {
    this.initFormGroup();
    this.listenAndPerformChanges();
  }

  initFormGroup() {
    this.formGroup = this.formBuilder.group({
      name: '',
      language: '',
      stars: 0
    })
  }

  updateFilters(filters: RepositoriesFilters) {
    this.filter.emit(filters)
  }

  private listenAndPerformChanges(){
    this.formGroup.valueChanges.pipe(
      takeUntil(this.destroy$),
      map(values => extractFilters(values)),
      tap(filters => this.updateFilters(filters))
    ).subscribe()
  }

  ngOnDestroy(): void { }

}
