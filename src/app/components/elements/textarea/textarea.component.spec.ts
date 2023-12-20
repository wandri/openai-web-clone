import {ComponentFixture} from '@angular/core/testing';

import {TextareaComponent} from './textarea.component';
import {MockBuilder, MockRender} from 'ng-mocks';

describe('InputComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;

  beforeEach(() => {
    return MockBuilder(
      TextareaComponent
    );
  });

  it('should create', () => {
    fixture = MockRender(TextareaComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
