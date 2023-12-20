import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IconComponent} from "../../icon/icon.component";

@Component({
  selector: 'app-button-icon',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './button-icon.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonIconComponent {
  @Input() disabled: boolean | "" = false;
  @Input() svgIcon?: string;
  @Input() fontIcon?: string;
}
