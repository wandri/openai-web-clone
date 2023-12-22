import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-billings-history',
  standalone: true,
  imports: [],
  templateUrl: './billings-history.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingsHistoryComponent {

}
