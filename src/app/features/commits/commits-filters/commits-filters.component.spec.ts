import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsFiltersComponent } from './commits-filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('CommitsFiltersComponent', () => {
  let component: CommitsFiltersComponent;
  let fixture: ComponentFixture<CommitsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommitsFiltersComponent, MatFormFieldModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
