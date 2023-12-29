import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";

export interface OptionButton {
  fontIcon?: string;
  svgIcon?: string;
  text?: string;
}

export interface MultiButton extends OptionButton {
  options?: OptionButton[];
}

@Component({
  selector: 'app-selection-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './selection-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectionButtonComponent {
  @Input({required: true}) color: 'neutral' | "primary" = 'primary'
  @Input() size: 'md' | 'sm' = 'sm';
  @Input() buttons: MultiButton[] = [];

  readonly activeIndex = signal(0);

  changeIndex(index: number): void {
    this.activeIndex.set(index);
  }
}
