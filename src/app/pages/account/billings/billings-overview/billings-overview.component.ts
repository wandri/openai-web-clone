import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-billings-overview',
  standalone: true,
  imports: [],
  templateUrl: './billings-overview.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingsOverviewComponent {

}
