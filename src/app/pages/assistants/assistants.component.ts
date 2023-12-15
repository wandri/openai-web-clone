import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from "../../components/elements/header/header.component";
import {MatIconModule} from "@angular/material/icon";
import {ButtonComponent} from "../../components/elements/button/button.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {delay, of, startWith} from "rxjs";
import {SkeletonLoaderComponent} from "../../components/elements/skeleton-loader/skeleton-loader.component";

@Component({
  selector: 'app-assistants',
  standalone: true,
  imports: [
    HeaderComponent,
    MatIconModule,
    ButtonComponent,
    SkeletonLoaderComponent
  ],
  templateUrl: './assistants.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssistantsComponent {
  readonly isLoading = toSignal(of(false).pipe(
    delay(2_000),
    startWith(true)
  ))
}
