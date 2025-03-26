import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepositoriesFiltersComponent } from './repositories-filters/repositories-filters.component';
import { RepositoriesComponent } from './repositories.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RepositoriesTableComponent } from './repositories-table/repositories-table.component';

describe('RepositoriesComponent', () => {
  let component: RepositoriesComponent;
  let fixture: ComponentFixture<RepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoriesComponent],
      imports: [RepositoriesFiltersComponent, RepositoriesTableComponent, BrowserAnimationsModule, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
