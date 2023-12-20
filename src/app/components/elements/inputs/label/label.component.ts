import {ChangeDetectionStrategy, Component, forwardRef, Input,} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  templateUrl: './label.component.html',
  styles: [':host {@apply flex overflow-auto text-inherit relative w-full; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LabelComponent),
      multi: true,
    },
  ],
})
export class LabelComponent {
  @Input() label?: string = '';
  @Input() description?: string = '';
  @Input() required = false;
}
