import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepositoriesFiltersComponent } from './repositories-filters.component';

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

  it('should emit filter with name values after typing in the input', () => {
    spyOn(component.filter, 'emit');
    const input = fixture.debugElement.query(By.css('input[test-selector="filters-name-input"]')).nativeElement;
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    expect(component.filter.emit).toHaveBeenCalledWith({ name: 'test', language: '', stars: 0 })
  })

  it('should emit filter with stars values after typing in the input', () => {
    spyOn(component.filter, 'emit');
    const input = fixture.debugElement.query(By.css('input[test-selector="filters-stars-input"]')).nativeElement;
    input.value = 10;
    input.dispatchEvent(new Event('input'));
    expect(component.filter.emit).toHaveBeenCalledWith({ name: '', language: '', stars: 10 })
  })

  it('should emit filter with language values after typing in the input', () => {
    spyOn(component.filter, 'emit');
    const input = fixture.debugElement.query(By.css('input[test-selector="filters-code-language-input"]')).nativeElement;
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    expect(component.filter.emit).toHaveBeenCalledWith({ name: '', language: 'test', stars: 0 })
  })

});
