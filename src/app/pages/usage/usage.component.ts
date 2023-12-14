import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-usage',
  standalone: true,
  imports: [],
  templateUrl: './usage.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsageComponent {

}
