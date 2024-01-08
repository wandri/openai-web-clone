import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {
  @Input() selections: string[] = [];
  @Input() position?: 'left' | 'center' | 'right' = 'left';
  @Input() selectedSelection?: string;
  @Output() changeSelection = new EventEmitter<string>();
}
