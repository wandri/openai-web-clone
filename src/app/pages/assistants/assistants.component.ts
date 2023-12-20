import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from "../../components/elements/headers/header/header.component";
import {ButtonComponent} from "../../components/elements/buttons/button/button.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {delay, of, startWith} from "rxjs";
import {SkeletonLoaderComponent} from "../../components/elements/loaders/skeleton-loader/skeleton-loader.component";
import {IconComponent} from "../../components/elements/icon/icon.component";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-assistants',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonComponent,
    SkeletonLoaderComponent,
    IconComponent,
    MatIconModule
  ],
  templateUrl: './assistants.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssistantsComponent {
  readonly isLoading = toSignal(of(false).pipe(
    delay(1_000),
    startWith(true)
  ))
}
