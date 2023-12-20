import {ComponentFixture} from '@angular/core/testing';

import {InputDateComponent} from './input-date.component';
import {MockBuilder, MockRender} from 'ng-mocks';

describe('InputDateComponent', () => {
  let component: InputDateComponent;
  let fixture: ComponentFixture<InputDateComponent>;

  beforeEach(() => {
    return MockBuilder(
      InputDateComponent
    );
  });

  it('should create', () => {
    fixture = MockRender(InputDateComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
