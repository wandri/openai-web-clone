import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  forwardRef,
  inject,
  Input,
  OnInit,
  signal
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {noop, tap} from 'rxjs';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-input-multi-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, MatIconModule],
  templateUrl: './multi-input-select.component.html',
  styles: [':host {@apply flex overflow-auto relative px-2 ; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiInputSelectComponent),
      multi: true
    }
  ]
})
export class MultiInputSelectComponent implements ControlValueAccessor, OnInit {
  @Input({required: true}) type: string = '';
  readonly _options = signal<{ value: string; displayValue: string }[]>([]);
  readonly form: FormControl<string[] | null> = new FormControl<
    string[] | null
  >([]);
  readonly formValue = toSignal<string[] | unknown>(this.form.valueChanges);
  readonly formattedName = computed<string>(() => {
    const value: string[] | unknown = this.formValue();
    if (!value) return '';
    const selections = (value as string[])
      .map((selection) =>
        this._options().find((option) => option.value === selection)
      )
      .filter((selection) => !!selection)
      .map((selection) => selection?.displayValue ?? '');
    return selections.join(', ');
  });
  private destroyRef = inject(DestroyRef);
  private onTouched: (value: string) => void = noop;
  private onChange: (value: string[] | null) => void = noop;

  @Input({required: true}) set options(
    value: {
      value: string;
      displayValue: string;
    }[]
  ) {
    this._options.set(value);
  }

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
    } else {
      this.form.enable({emitEvent: false});
    }
  }

  writeValue(value: string[] | undefined): void {
    this.form.setValue(value ?? [], {emitEvent: false});
  }
}
