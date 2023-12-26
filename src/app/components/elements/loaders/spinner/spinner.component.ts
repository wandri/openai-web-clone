import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [],
  templateUrl: './spinner.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {
  height = signal<number>(2)

  @Input() set size(value: 'sm' | 'md') {
    if (value === 'sm') {
      this.height.set(1);
    } else {
      this.height.set(2);
    }
  };
}
