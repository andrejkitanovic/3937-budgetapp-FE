import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFinanceComponent } from './single-finance.component';

describe('SingleFinanceComponent', () => {
  let component: SingleFinanceComponent;
  let fixture: ComponentFixture<SingleFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
