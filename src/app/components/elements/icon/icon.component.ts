import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    MatIconModule
  ],
  styles: ['mat-icon.icon-base {@apply h-5 w-5;}'],
  templateUrl: './icon.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input() svgIcon?: string;
  @Input() fontIcon?: string;
}
