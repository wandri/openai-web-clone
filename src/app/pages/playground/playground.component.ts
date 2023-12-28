import {ChangeDetectionStrategy, Component, computed, ElementRef, signal, ViewChild} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {ButtonComponent} from "../../components/elements/buttons/button/button.component";
import {NgClass} from "@angular/common";
import {CdkDrag} from "@angular/cdk/drag-drop";
import {TextAreaComponent} from "../../components/elements/inputs/text-area/text-area.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {delay, of, startWith} from "rxjs";
import {SkeletonLoaderComponent} from "../../components/elements/loaders/skeleton-loader/skeleton-loader.component";
import {HeaderComponent} from "../../components/elements/headers/header/header.component";
import {IconComponent} from "../../components/elements/icon/icon.component";

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [
    MatIconModule,
    ButtonComponent,
    NgClass,
    CdkDrag,
    TextAreaComponent,
    SkeletonLoaderComponent,
    HeaderComponent,
    IconComponent
  ],
  templateUrl: './playground.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaygroundComponent {
  @ViewChild('thread') threadElement!: ElementRef;

  isResizing = signal<boolean>(false);
  leftContainerSize = signal<number>(36);
  rightContainerSize = computed(() => 100 - this.leftContainerSize())

  readonly isLoading = toSignal(of(false).pipe(
    delay(1_000),
    startWith(true)
  ))

  resize($event: MouseEvent): void {
    if (this.isResizing()) {
      const offsetWidth = this.threadElement.nativeElement.offsetWidth;
      const offsetLeft = this.threadElement.nativeElement.offsetLeft;
      const pointerPosition = $event.x;

      const diff = pointerPosition - offsetLeft;
      let size = Math.round(diff / offsetWidth * 10_000) / 100;
      if (size < 36) {
        size = 36;
      } else if (size > 50) {
        size = 50;
      }
      this.leftContainerSize.set(size);
    }
  }

  initResizing(): void {
    this.isResizing.set(true)
  }

  finishResizing(): void {
    this.isResizing.set(false)
  }
}
