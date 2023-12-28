import {ChangeDetectionStrategy, Component, DestroyRef, forwardRef, inject, Input, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {noop, tap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {ButtonIconComponent} from "../../buttons/button-icon/button-icon.component";
import {LabelComponent} from "../label/label.component";
import {MatNativeDateModule} from "@angular/material/core";

@Component({
  selector: 'app-input-date',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    LabelComponent,
    ButtonIconComponent,
    MatNativeDateModule
  ],
  templateUrl: './input-date.component.html',
  styles: [':host {@apply flex text-inherit relative; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateComponent),
      multi: true
    }
  ]
})
export class InputDateComponent implements ControlValueAccessor, OnInit {
  @Input() label: string | undefined | null = '';
  @Input() placeholder: string = '';
  @Input() description: string | undefined | null = '';
  @Input() required = false;
  readonly form: FormControl<string | null> = new FormControl<string | null>(
    ''
  );
  readonly disabled = signal<boolean>(false)
  private destroyRef = inject(DestroyRef);
  private onTouched: (value: string) => void = noop;
  private onChange: (value: string | null) => void = noop;

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        tap((value) => this.onChange(value)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    if (disabled) {
      this.form.disable({emitEvent: false});
      this.disabled.set(true);
    } else {
      this.form.enable({emitEvent: false});
      this.disabled.set(false);
    }
  }

  writeValue(value: string | undefined): void {
    this.form.setValue(value ?? '', {emitEvent: false});
  }
}
