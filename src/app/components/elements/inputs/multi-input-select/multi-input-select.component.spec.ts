import {ComponentFixture} from '@angular/core/testing';

import {MultiInputSelectComponent} from './multi-input-select.component';
import {MockBuilder, MockRender} from 'ng-mocks';

describe('MultiInputSelectComponent', () => {
  let component: MultiInputSelectComponent;
  let fixture: ComponentFixture<MultiInputSelectComponent>;

  beforeEach(() => {
    return MockBuilder(
      MultiInputSelectComponent
    );
  });

  it('should create', () => {
    fixture = MockRender(MultiInputSelectComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
