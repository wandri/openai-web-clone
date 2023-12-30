import {ChangeDetectionStrategy, Component, computed} from '@angular/core';
import {ButtonIconComponent} from "../../../../components/elements/buttons/button-icon/button-icon.component";
import {CdkTableModule} from "@angular/cdk/table";
import {DatePipe} from "@angular/common";
import {
  SkeletonLoaderComponent
} from "../../../../components/elements/loaders/skeleton-loader/skeleton-loader.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {delay, of, startWith} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {ButtonTextComponent} from "../../../../components/elements/buttons/button-text/button-text.component";
import {BadgeComponent} from "../../../../components/elements/badge/badge.component";
import {ButtonComponent} from "../../../../components/elements/buttons/button/button.component";

@Component({
  selector: 'app-billings-history',
  standalone: true,
  imports: [
    ButtonIconComponent,
    CdkTableModule,
    DatePipe,
    SkeletonLoaderComponent,
    ButtonTextComponent,
    BadgeComponent,
    ButtonComponent
  ],
  templateUrl: './billings-history.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingsHistoryComponent {
  readonly isLoading = toSignal(of(false).pipe(
    delay(1_000),
    startWith(true)
  ));
  readonly displayedColumns = ['invoice', 'status', 'amount', 'createdAt', 'action'];
  readonly datasource = computed(() => {
    if (this.isLoading()) {
      return [];
    } else {
      return new MatTableDataSource<{
        invoice: string,
        status: 'Paid' | 'Unpaid',
        createdAt: Date,
        amount: number
      }>([
        {
          invoice: 'C0A0TH45-0006',
          status: 'Paid',
          amount: 6.54,
          createdAt: new Date('01/01/2022'),
        },
        {
          invoice: 'C0A0TH45-0007',
          status: 'Paid',
          amount: 6.01,
          createdAt: new Date('01/02/2022'),
        },
        {
          invoice: 'C0A0TH45-0008',
          status: 'Paid',
          amount: 3.53,
          createdAt: new Date('01/03/2022'),
        },
        {
          invoice: 'C0A0TH45-0009',
          status: 'Paid',
          amount: 1.94,
          createdAt: new Date('01/04/2022'),
        },
        {
          invoice: 'C0A0TH45-0010',
          status: 'Paid',
          amount: 5.75,
          createdAt: new Date('01/05/2022'),
        },
        {
          invoice: 'C0A0TH45-0011',
          status: 'Paid',
          amount: 2.09,
          createdAt: new Date('01/06/2022'),
        }
      ])
    }
  });
}
