import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {HeaderComponent} from "../../components/elements/headers/header/header.component";
import {ButtonComponent} from "../../components/elements/buttons/button/button.component";
import {
  HeaderWithSubHeaderComponent
} from "../../components/elements/headers/header-with-sub-header/header-with-sub-header.component";
import {ButtonToggleComponent} from "../../components/elements/buttons/button-toggle/button-toggle.component";
import {
  ButtonNavigationComponent
} from "../../components/elements/buttons/button-navigation/button-navigation.component";
import {SkeletonLoaderComponent} from "../../components/elements/loaders/skeleton-loader/skeleton-loader.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {delay, of, startWith} from "rxjs";
import {
  ChartBarTimelineComponent,
  LineChartDatum,
} from "../../components/elements/chart/chart-bar-timeline/chart-bar-timeline.component";
import {getUsageDemo} from "./demo";
import {PieChartComponent} from "../../components/elements/chart/pie-chart/pie-chart.component";

@Component({
  selector: 'app-usage',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonComponent,
    HeaderWithSubHeaderComponent,
    ButtonToggleComponent,
    ButtonNavigationComponent,
    SkeletonLoaderComponent,
    ChartBarTimelineComponent,
    PieChartComponent
  ],
  templateUrl: './usage.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}', ':host {scrollbar-gutter: stable}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsageComponent {
  readonly isLoading = toSignal(of(false).pipe(
    delay(1_000),
    startWith(false)
  ))
  readonly costActivityButtons = [{text: 'Cost'}, {text: 'Activity'}];
  readonly months = ['August', 'September', 'October', 'November', 'December'];
  readonly chosenMonthIndex = signal<number>(this.months.length - 1);
  readonly dailyCostData = computed<LineChartDatum[]>(() => {
    if (this.chosenMonthIndex() > -1) {
      return getUsageDemo()
    }
    return [];
  });
  monthlyBillLimit = computed<number>(() => {
    if (this.chosenMonthIndex() > -1) {
      return Math.random();
    }
    return 0;
  });

  changeMonthIndex($event: number): void {
    this.chosenMonthIndex.set($event);
  }
}

