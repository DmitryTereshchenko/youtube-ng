import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemStatisticComponent } from './search-item-statistic.component';

describe('SearchItemStatisticComponent', () => {
  let component: SearchItemStatisticComponent;
  let fixture: ComponentFixture<SearchItemStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchItemStatisticComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchItemStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
