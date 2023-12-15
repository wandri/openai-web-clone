import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderWithSubHeaderComponent} from './header-with-sub-header.component';

describe('HeaderComponent', () => {
  let component: HeaderWithSubHeaderComponent;
  let fixture: ComponentFixture<HeaderWithSubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWithSubHeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderWithSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
