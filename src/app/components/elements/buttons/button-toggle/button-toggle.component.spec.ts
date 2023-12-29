import {ComponentFixture} from '@angular/core/testing';

import {ButtonToggleComponent} from './button-toggle.component';
import {MockBuilder, MockRender} from 'ng-mocks';

describe('OptionButtonComponent', () => {
  let component: ButtonToggleComponent;
  let fixture: ComponentFixture<ButtonToggleComponent>;

  beforeEach(() => {
    return MockBuilder(
      ButtonToggleComponent
    );
  });

  it('should create', () => {
    fixture = MockRender(ButtonToggleComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
