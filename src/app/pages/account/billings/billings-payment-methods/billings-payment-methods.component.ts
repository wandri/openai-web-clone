import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ButtonTextComponent} from "../../../../components/elements/buttons/button-text/button-text.component";

@Component({
  selector: 'app-billings-payment-methods',
  standalone: true,
  imports: [
    ButtonTextComponent
  ],
  templateUrl: './billings-payment-methods.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingsPaymentMethodsComponent {
  readonly cards: {
    brand: string,
    country: string,
    expirationMonth: number,
    expirationYear: number,
    last4: string
  }[] = [
    {
      brand: "mastercard",
      country: "FR",
      expirationMonth: 11,
      expirationYear: 2024,
      last4: "4764"
    },
    {
      brand: "visa",
      country: "FR",
      expirationMonth: 1,
      expirationYear: 2030,
      last4: "5094"
    }
  ]
}
