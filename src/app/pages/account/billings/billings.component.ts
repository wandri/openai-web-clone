import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-billings',
  standalone: true,
  imports: [],
  templateUrl: './billings.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingsComponent {

}
