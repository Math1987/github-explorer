import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DEBOUNCE_TIME, RepositoriesFiltersComponent } from './repositories-filters.component';

const DEBOUNCE_TEST_LAPS = 100;

describe('RepositoriesFiltersComponent', () => {
  let component: RepositoriesFiltersComponent;
  let fixture: ComponentFixture<RepositoriesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoriesFiltersComponent,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RepositoriesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filter', () => {
    spyOn(component.filter, 'emit');
    component.updateFilters({ name: '', language: '', stars: 0 })
    expect(component.filter.emit).toHaveBeenCalledWith({ name: '', language: '', stars: 0 })
  })


  it('should not emit filter with name values after typing in the input when debounce time is 500ms', fakeAsync(() => {
    spyOn(component.filter, 'emit');
    const input = fixture.debugElement.query(By.css('input[test-selector="filters-name-input"]')).nativeElement;
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    tick(DEBOUNCE_TIME - DEBOUNCE_TEST_LAPS);
    expect(component.filter.emit).not.toHaveBeenCalled();
    tick(DEBOUNCE_TEST_LAPS);
    expect(component.filter.emit).toHaveBeenCalledWith({ name: 'test', language: '', stars: 0 })
  }))

  it('should emit filter with stars values after typing in the input', fakeAsync(() => {
    spyOn(component.filter, 'emit');
    const input = fixture.debugElement.query(By.css('input[test-selector="filters-stars-input"]')).nativeElement;
    input.value = 10;
    input.dispatchEvent(new Event('input'));
    tick(DEBOUNCE_TIME - DEBOUNCE_TEST_LAPS);
    expect(component.filter.emit).not.toHaveBeenCalled();
    tick(DEBOUNCE_TEST_LAPS);
    expect(component.filter.emit).toHaveBeenCalledWith({ name: '', language: '', stars: 10 })
  }))

  it('should emit filter with language values after typing in the input', fakeAsync(() => {
    spyOn(component.filter, 'emit');
    const input = fixture.debugElement.query(By.css('input[test-selector="filters-code-language-input"]')).nativeElement;
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    tick(DEBOUNCE_TIME - DEBOUNCE_TEST_LAPS);
    expect(component.filter.emit).not.toHaveBeenCalled();
    tick(DEBOUNCE_TEST_LAPS);
    expect(component.filter.emit).toHaveBeenCalledWith({ name: '', language: 'test', stars: 0 })
  }))

});
