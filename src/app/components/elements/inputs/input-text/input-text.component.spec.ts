import {ComponentFixture} from '@angular/core/testing';

import {InputTextComponent} from './input-text.component';
import {MockBuilder, MockRender} from 'ng-mocks';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(() => {
    return MockBuilder(
      InputTextComponent
    );
  });

  it('should create', () => {
    fixture = MockRender(InputTextComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
