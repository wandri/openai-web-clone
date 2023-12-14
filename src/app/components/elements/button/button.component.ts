import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input({required: true}) color: 'primary' | 'neutral' = 'neutral';
  @Input({required: true}) size: 'md' | 'sm' = 'sm';
  @Input() disabled: boolean | "" = false;
}
