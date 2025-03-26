import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesTableComponent } from './repositories-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RepositoriesTableComponent', () => {
  let component: RepositoriesTableComponent;
  let fixture: ComponentFixture<RepositoriesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoriesTableComponent, HttpClientTestingModule]
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
