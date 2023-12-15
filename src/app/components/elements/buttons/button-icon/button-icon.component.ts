import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-button-icon',
  standalone: true,
  imports: [
    MatIconModule
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
