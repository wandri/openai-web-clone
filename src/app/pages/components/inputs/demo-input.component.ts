import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ButtonComponent} from "../../../components/elements/buttons/button/button.component";
import {VerticalMenuComponent} from "../../../components/navigation/vertical-menu/vertical-menu.component";
import {RouterOutlet} from "@angular/router";
import {InputTextComponent} from "../../../components/elements/inputs/input-text/input-text.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {InputCheckboxComponent} from "../../../components/elements/inputs/input-checkbox/input-checkbox.component";
import {InputDateComponent} from "../../../components/elements/inputs/input-date/input-date.component";
import {
  MultiInputSelectComponent
} from "../../../components/elements/inputs/multi-input-select/multi-input-select.component";

@Component({
  selector: 'app-demo-input',
  standalone: true,
  imports: [
    ButtonComponent,
    VerticalMenuComponent,
    RouterOutlet,
    InputTextComponent,
    ReactiveFormsModule,
    InputCheckboxComponent,
    InputDateComponent,
    MultiInputSelectComponent
  ],
  templateUrl: './demo-input.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoInputComponent {
  readonly formLabel = new FormControl('label example');
  readonly formDescription = new FormControl('description example');
  readonly formText = new FormControl('Form text');
  readonly formCheckbox = new FormControl(false);
  readonly formDate = new FormControl(new Date());
  readonly formMultiSelect = new FormControl(['first example']);
  readonly formDisabled = new FormControl(false);

  readonly multiSelectOptions: {
    value: string;
    displayValue: string;
  }[]
    = [
    {
      value: 'first example',
      displayValue: '1st example'
    },
    {
      value: 'second example',
      displayValue: '2nd example'
    },
  ]

  constructor() {
    this.formDisabled.valueChanges.subscribe((value) => {
      if (value) {
        this.formText.disable();
        this.formCheckbox.disable();
        this.formDate.disable();
        this.formMultiSelect.disable();
      } else {
        this.formText.enable();
        this.formCheckbox.enable();
        this.formDate.enable();
        this.formMultiSelect.enable();
      }
    });
  }
}
