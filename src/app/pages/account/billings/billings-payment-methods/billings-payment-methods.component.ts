import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {ButtonTextComponent} from "../../../../components/elements/buttons/button-text/button-text.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {delay, of, startWith} from "rxjs";
import {
  SkeletonLoaderComponent
} from "../../../../components/elements/loaders/skeleton-loader/skeleton-loader.component";
import {ButtonComponent} from "../../../../components/elements/buttons/button/button.component";

@Component({
  selector: 'app-billings-payment-methods',
  standalone: true,
  imports: [
    ButtonTextComponent,
    SkeletonLoaderComponent,
    ButtonComponent
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

  readonly changingCards = signal<string[]>([])
  readonly cards = computed<{
    id: string,
    brand: string,
    country: string,
    expirationMonth: number,
    expirationYear: number,
    last4: string,
    main: boolean,
  }[]>(() => {
    if (this.isLoading()) {
      return []
    } else {
      return [
        {
          id: '1',
          brand: "mastercard",
          country: "FR",
          expirationMonth: 11,
          expirationYear: 2024,
          last4: "4764",
          main: false,
        },
        {
          id: '2',
          brand: "visa",
          country: "FR",
          expirationMonth: 1,
          expirationYear: 2030,
          last4: "5094",
          main: true,
        }
      ]
    }
  })

  deleteCard(cardId: string): void {
    this.changingCards.update(cards => [...cards, cardId]);
    setTimeout(() => {
      this.changingCards.update(cards => cards.filter(id => id !== cardId));
    }, 2_000)
  }
}
