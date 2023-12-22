import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    MatIconModule
  ],
  styles: [':host {@apply flex items-center}', 'mat-icon.icon-base {@apply h-5 w-5 text-sm;}'],
  templateUrl: './icon.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input() svgIcon?: string;
  @Input() fontIcon?: string;
  @Input() size?: 'sm' | 'base' = 'sm';
}
