import { CommonModule } from '@angular/common';
import { Component, forwardRef, signal, Signal } from '@angular/core';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { map, startWith, Subject, takeUntil, tap } from 'rxjs';
import { CodeLanguagesService } from '@/app/shared/services/code-languages.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-code-language-autocomplete',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  templateUrl: './code-languages-autocomplete.component.html',
  styleUrl: './code-languages-autocomplete.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodeLanguagesAutocompleteComponent),
      multi: true
    }
  ]
})
export class CodeLanguagesAutocompleteComponent {

  destroy$ = new Subject<void>();
  codeLanguages!: Signal<string[]>;
  filteredLanguages = signal<string[]>([]);
  control = new FormControl('');
  disabled = false;

  onChange: any = () => { };
  onTouch: any = () => { };

  constructor(private codeLanguagesService: CodeLanguagesService) {
    this.codeLanguages = toSignal(this.codeLanguagesService.getCodeLanguages()) as Signal<string[]>;
  }

  ngOnInit() {
    this.initControl();
    this.listenAndPerformChanges();
  }

  private initControl(){
    this.control.valueChanges.pipe(
      takeUntil(this.destroy$),
      startWith(''),
      map(value => this._filter(value || '')),
      tap(value => this.filteredLanguages.set(value))
    ).subscribe();
  }

  private listenAndPerformChanges(){
    this.control.valueChanges.subscribe(value => {
      this.onChange(value);
      this.onTouch();
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.codeLanguages()?.filter(lang =>
      lang.toLowerCase().includes(filterValue)
    ) || [];
  }

  writeValue(value: string): void {
    this.control.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
