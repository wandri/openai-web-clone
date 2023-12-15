import {ComponentFixture} from '@angular/core/testing';

import {MultiButtonsComponent} from './multi-buttons.component';
import {MockBuilder, MockRender} from 'ng-mocks';

describe('OptionButtonComponent', () => {
  let component: MultiButtonsComponent;
  let fixture: ComponentFixture<MultiButtonsComponent>;

  beforeEach(() => {
    return MockBuilder(
      MultiButtonsComponent
    );
  });

  it('should create', () => {
    fixture = MockRender(MultiButtonsComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
