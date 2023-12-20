import {ComponentFixture} from '@angular/core/testing';

import {InputCheckboxComponent} from './input-checkbox.component';
import {MockBuilder, MockRender} from 'ng-mocks';

describe('InputCheckboxComponent', () => {
  let component: InputCheckboxComponent;
  let fixture: ComponentFixture<InputCheckboxComponent>;

  beforeEach(() => {
    return MockBuilder(
      InputCheckboxComponent
    );
  });

  it('should create', () => {
    fixture = MockRender(InputCheckboxComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
