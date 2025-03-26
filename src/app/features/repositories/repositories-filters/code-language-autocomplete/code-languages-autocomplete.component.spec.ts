import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLanguagesMockEmptyService } from '@/app/shared/mocks/services/code-languages.mock.service';
import { CodeLanguagesService } from '@/app/shared/services/code-languages.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodeLanguagesAutocompleteComponent } from './code-languages-autocomplete.component';

describe('CodeLanguageAutocompleteComponent', () => {
  let component: CodeLanguagesAutocompleteComponent;
  let fixture: ComponentFixture<CodeLanguagesAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeLanguagesAutocompleteComponent, BrowserAnimationsModule, HttpClientTestingModule],
      providers: [
        { provide: CodeLanguagesService, useClass: CodeLanguagesMockEmptyService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeLanguagesAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have an empty list of languages', () => {
  //   expect(component.filteredLanguages()).toEqual([]);
  // })

});
