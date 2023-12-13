import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FinetuneComponent} from './finetune.component';

describe('FinetuneComponent', () => {
  let component: FinetuneComponent;
  let fixture: ComponentFixture<FinetuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinetuneComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FinetuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
