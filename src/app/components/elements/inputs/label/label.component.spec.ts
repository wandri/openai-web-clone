import {ComponentFixture} from '@angular/core/testing';

import {LabelComponent} from './label.component';
import {MockBuilder, MockRender} from 'ng-mocks';

describe('LabelComponent', () => {
  let component: LabelComponent;
  let fixture: ComponentFixture<LabelComponent>;

  beforeEach(() => {
    return MockBuilder(
      LabelComponent
    );
  });

  it('should create', () => {
    fixture = MockRender(LabelComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
