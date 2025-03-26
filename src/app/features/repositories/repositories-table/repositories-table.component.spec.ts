import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesTableComponent } from './repositories-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RepositoriesTableComponent', () => {
  let component: RepositoriesTableComponent;
  let fixture: ComponentFixture<RepositoriesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, BrowserAnimationsModule, RepositoriesTableComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
