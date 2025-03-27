import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsComponent } from './commits.component';
import { CommitsFiltersComponent } from './commits-filters/commits-filters.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

describe('CommitsComponent', () => {
  let component: CommitsComponent;
  let fixture: ComponentFixture<CommitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommitsComponent],
      imports: [BrowserAnimationsModule, HttpClientTestingModule, CommitsFiltersComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          params: new Subject<any>()
        }
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
