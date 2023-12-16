import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {HeaderComponent} from "../../components/elements/headers/header/header.component";
import {ButtonComponent} from "../../components/elements/buttons/button/button.component";
import {
  HeaderWithSubHeaderComponent
} from "../../components/elements/headers/header-with-sub-header/header-with-sub-header.component";
import {MultiButtonsComponent} from "../../components/elements/buttons/multi-buttons/multi-buttons.component";
import {
  ButtonNavigationComponent
} from "../../components/elements/buttons/button-navigation/button-navigation.component";
import {SkeletonLoaderComponent} from "../../components/elements/loaders/skeleton-loader/skeleton-loader.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {delay, of, startWith} from "rxjs";

@Component({
  selector: 'app-usage',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonComponent,
    HeaderWithSubHeaderComponent,
    MultiButtonsComponent,
    ButtonNavigationComponent,
    SkeletonLoaderComponent
  ],
  templateUrl: './usage.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}', ':host {scrollbar-gutter: stable}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsageComponent {
  readonly isLoading = toSignal(of(false).pipe(
    delay(1_000),
    startWith(true)
  ))
  readonly costActivityButtons = [{text: 'Cost'}, {text: 'Activity'}];

  readonly months = ['October', 'November', 'December'];
  readonly chosenMonthIndex = signal<number>(this.months.length - 1);
}
