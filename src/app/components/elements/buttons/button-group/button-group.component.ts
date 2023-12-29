import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {IconComponent} from "../../icon/icon.component";

export interface OptionButton {
  fontIcon?: string;
  svgIcon?: string;
  text?: string;
  callback?: (arg?: { id?: string; }) => void;
}

export interface MultiButton extends OptionButton {
  options?: OptionButton[];
}

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule, IconComponent],
  templateUrl: './button-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonGroupComponent {
  @Input({required: true}) color: 'neutral' | "primary" = 'primary';
  @Input() size: 'md' | 'sm' = 'sm';
  @Input() buttons: MultiButton[] = [];
  @Input() disabled: boolean = false;
  @Input() argument?: { id?: string } = {};
}
