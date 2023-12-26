import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {toBoolean} from "../../../../../shared/utils";

@Component({
  selector: 'app-button-navigation',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './button-navigation.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNavigationComponent {
  @Input({required: true}) size: 'md' | 'sm' = 'sm';
  @Input({transform: toBoolean}) disabled: boolean = false;
  @Input() list: string[] = [];
  @Input() chosenIndex: number = 0;
  @Output() onChangeIndex = new EventEmitter<number>();

  changeIndex(number: 1 | -1): void {
    this.onChangeIndex.emit(this.chosenIndex + number);
  }
}
