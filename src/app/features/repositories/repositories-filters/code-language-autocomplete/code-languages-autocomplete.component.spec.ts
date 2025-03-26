import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLanguagesAutocompleteComponent } from './code-languages-autocomplete.component';

describe('CodeLanguageAutocompleteComponent', () => {
  let component: CodeLanguagesAutocompleteComponent;
  let fixture: ComponentFixture<CodeLanguagesAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeLanguagesAutocompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeLanguagesAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
