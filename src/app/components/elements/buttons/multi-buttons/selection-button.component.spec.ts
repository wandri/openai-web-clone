import {ComponentFixture} from '@angular/core/testing';

import {SelectionButtonComponent} from './selection-button.component';
import {MockBuilder, MockRender} from 'ng-mocks';

describe('OptionButtonComponent', () => {
  let component: SelectionButtonComponent;
  let fixture: ComponentFixture<SelectionButtonComponent>;

  beforeEach(() => {
    return MockBuilder(
      SelectionButtonComponent
    );
  });

  it('should create', () => {
    fixture = MockRender(SelectionButtonComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
