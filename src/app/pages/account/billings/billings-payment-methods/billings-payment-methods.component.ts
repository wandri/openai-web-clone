import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-billings-payment-methods',
  standalone: true,
  imports: [],
  templateUrl: './billings-payment-methods.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingsPaymentMethodsComponent {

}
