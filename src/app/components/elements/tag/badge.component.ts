import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  styles: [':host {@apply inline-block}'],
  templateUrl: './badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {
  @Input({required: true}) size: 'xs' | 'sm' = 'sm';
}
