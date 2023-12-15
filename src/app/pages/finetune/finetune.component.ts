import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MultiButtonsComponent} from "../../components/elements/multi-buttons/multi-buttons.component";
import {
  HeaderWithSubHeaderComponent
} from "../../components/elements/header-with-sub-header/header-with-sub-header.component";
import {ButtonComponent} from "../../components/elements/button/button.component";
import {MatIconModule} from "@angular/material/icon";
import {toSignal} from "@angular/core/rxjs-interop";
import {delay, of, startWith} from "rxjs";
import {SpinnerComponent} from "../../components/elements/spinner/spinner.component";

@Component({
  selector: 'app-finetune',
  standalone: true,
  imports: [
    MultiButtonsComponent,
    HeaderWithSubHeaderComponent,
    ButtonComponent,
    MatIconModule,
    SpinnerComponent
  ],
  templateUrl: './finetune.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinetuneComponent {
  readonly isLoading = toSignal(of(false).pipe(
    delay(1_000),
    startWith(true)
  ))

  readonly buttons = [{text: 'All'}, {text: 'Successful'}, {text: 'Failed'}];
}
