import {ChangeDetectionStrategy, Component, DestroyRef, forwardRef, inject, Input, OnInit, signal} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {noop, tap} from "rxjs";

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './text-area.component.html',
  styles: [':host {@apply flex overflow-auto text-inherit relative; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true
    }
  ]
})
export class TextAreaComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder: string = '';
  readonly form: FormControl<string | null> = new FormControl<string | null>(
    ''
  );
  readonly height = signal<number>(24)
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
    } else {
      this.form.enable({emitEvent: false});
    }
  }

  writeValue(value: string | undefined): void {
    this.form.setValue(value ?? '', {emitEvent: false});
  }

  handleChange(event: Event): void {
    setTimeout(() => {
      const textarea: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
      textarea.style.height = 'auto'; // Reset the height
      const value = Math.min(textarea.scrollHeight, 200);
      textarea.style.height = `${value}px`;
      this.height.set(value);
    })
  }
}
