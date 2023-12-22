import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from "../../../../components/elements/headers/header/header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-billings',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './billings.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingsComponent {
  readonly tabs: { name: string; route: string[] }[] = [
    {name: 'Overview', route: ['/', 'account', 'billings', 'overview']},
    {name: 'Payment methods', route: ['/', 'account', 'billings', 'payment-methods']},
    {name: 'Billing history', route: ['/', 'account', 'billings', 'history']},
    {name: 'Preferences', route: ['/', 'account', 'billings', 'preferences']},
  ]
}
