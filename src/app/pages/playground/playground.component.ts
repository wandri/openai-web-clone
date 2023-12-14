import {ChangeDetectionStrategy, Component, computed, ElementRef, signal, ViewChild} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {ButtonComponent} from "../../components/elements/button/button.component";
import {NgClass} from "@angular/common";
import {CdkDrag} from "@angular/cdk/drag-drop";
import {TextAreaComponent} from "../../components/elements/input/text-area/text-area.component";

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [
    MatIconModule,
    ButtonComponent,
    NgClass,
    CdkDrag,
    TextAreaComponent
  ],
  templateUrl: './playground.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaygroundComponent {
  @ViewChild('thread') threadElement!: ElementRef;

  isResizing = signal<boolean>(false);
  leftContainerSize = signal<number>(30);
  rightContainerSize = computed(() => 100 - this.leftContainerSize())

  resize($event: MouseEvent): void {
    if (this.isResizing()) {
      const offsetWidth = this.threadElement.nativeElement.offsetWidth;
      const offsetLeft = this.threadElement.nativeElement.offsetLeft;
      const pointerPosition = $event.x;

      const diff = pointerPosition - offsetLeft;
      let size = Math.round(diff / offsetWidth * 10_000) / 100;
      if (size < 30) {
        size = 30;
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
