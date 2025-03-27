import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsTableComponent } from './commits-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CommitsTableComponent', () => {
  let component: CommitsTableComponent;
  let fixture: ComponentFixture<CommitsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, HttpClientTestingModule, CommitsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitsTableComponent);
    component = fixture.componentInstance;
    const ref = fixture.componentRef;
    ref.setInput('owner', 'owner');
    ref.setInput('repo', 'repo');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
