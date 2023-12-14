import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-limits',
  standalone: true,
  imports: [],
  templateUrl: './limits.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LimitsComponent {

}
