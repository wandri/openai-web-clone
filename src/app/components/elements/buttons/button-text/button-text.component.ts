import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button-text',
  standalone: true,
  imports: [],
  templateUrl: './button-text.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonTextComponent {
  @Input({required: true}) size: 'md' | 'sm' = 'sm';
  @Input() disabled: boolean | "" = false;
}
