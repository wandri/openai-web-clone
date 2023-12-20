import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
  @Input() text?: string;
}
