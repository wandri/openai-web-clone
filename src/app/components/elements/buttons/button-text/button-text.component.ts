import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {toBoolean} from "../../../../../shared/utils";
import {SpinnerComponent} from "../../loaders/spinner/spinner.component";

@Component({
  selector: 'app-button-text',
  standalone: true,
  imports: [
    SpinnerComponent
  ],
  templateUrl: './button-text.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonTextComponent {
  @Input({required: true}) size: 'md' | 'sm' = 'sm';
  @Input({transform: toBoolean}) disabled: boolean = false;
  @Input({transform: toBoolean}) isLoading: boolean = false;
}
