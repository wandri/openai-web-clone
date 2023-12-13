import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BillingsComponent} from './billings.component';

describe('BillingsComponent', () => {
  let component: BillingsComponent;
  let fixture: ComponentFixture<BillingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BillingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
