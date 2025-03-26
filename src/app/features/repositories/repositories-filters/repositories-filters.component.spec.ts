import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesFiltersComponent } from './repositories-filters.component';

describe('RepositoriesFiltersComponent', () => {
  let component: RepositoriesFiltersComponent;
  let fixture: ComponentFixture<RepositoriesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoriesFiltersComponent]
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
    component.updateFilters({name: '', language: '', stars: 0})
    expect(component.filter.emit).toHaveBeenCalledWith({name: '', language: '', stars: 0})
  })

});
