import { CommonModule } from '@angular/common';
import { Component, forwardRef, signal, Signal } from '@angular/core';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Subject } from 'rxjs';
import { CodeLanguagesService } from '@/app/shared/services/code-languages.service';

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

  constructor(private codeLanguagesService: CodeLanguagesService) {}

  ngOnInit() {}

  private initControl(){}

  private listenAndPerformChanges(){}

  private _filter(value: string): string[] {
    return [];
  }

  writeValue(value: string): void {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  ngOnDestroy(): void {}

}
