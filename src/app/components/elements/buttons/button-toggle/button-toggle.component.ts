import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";

export interface ToggleButton {
  fontIcon?: string;
  svgIcon?: string;
  text?: string;
}

@Component({
  selector: 'app-button-toggle',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './button-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonToggleComponent {
  @Input({required: true}) color: 'neutral' | "primary" = 'primary'
  @Input() size: 'md' | 'sm' = 'sm';
  @Input() buttons: ToggleButton[] = [];

  readonly activeIndex = signal(0);

  changeIndex(index: number): void {
    this.activeIndex.set(index);
  }
}
