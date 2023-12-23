import {ChangeDetectionStrategy, Component, computed} from '@angular/core';
import {ButtonTextComponent} from "../../../../components/elements/buttons/button-text/button-text.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {delay, of, startWith} from "rxjs";
import {
  SkeletonLoaderComponent
} from "../../../../components/elements/loaders/skeleton-loader/skeleton-loader.component";

@Component({
  selector: 'app-billings-payment-methods',
  standalone: true,
  imports: [
    ButtonTextComponent,
    SkeletonLoaderComponent
  ],
  templateUrl: './billings-payment-methods.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingsPaymentMethodsComponent {
  readonly isLoading = toSignal(of(false).pipe(
    delay(1_000),
    startWith(true)
  ));
  readonly cards = computed<{
    brand: string,
    country: string,
    expirationMonth: number,
    expirationYear: number,
    last4: string
  }[]>(() => {
    if (this.isLoading()) {
      return []
    } else {
      return [
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
  })
}
