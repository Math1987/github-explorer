import { Component, output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map, Subject, takeUntil, tap } from 'rxjs';
import { DEBOUNCE_TIME } from '../../repositories/repositories-filters/repositories-filters.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-commits-filters',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './commits-filters.component.html',
  styleUrl: './commits-filters.component.scss'
})
export class CommitsFiltersComponent {

  destroy$ = new Subject<void>();
  formGroup!: FormGroup<any>;
  filter = output<string>();

  constructor(private formBuilder: FormBuilder) {
    this.initFormGroup();
    this.listenAndPerformChanges();
  }

  initFormGroup() {
    this.formGroup = this.formBuilder.group({
      search: '',
    })
  }

  updateFilters(filters: string) {
    this.filter.emit(filters)
  }

  private listenAndPerformChanges() {
    this.formGroup.valueChanges.pipe(
      takeUntil(this.destroy$),
      map(values => values.search),
      debounceTime(DEBOUNCE_TIME),
      tap(filters => this.updateFilters(filters))
    ).subscribe()
  }

}
