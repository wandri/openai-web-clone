import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  forwardRef,
  inject,
  Input,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {noop, tap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {LabelComponent} from "../label/label.component";
import {SkeletonLoaderComponent} from "../../loaders/skeleton-loader/skeleton-loader.component";
import {IconComponent} from "../../icon/icon.component";

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LabelComponent, SkeletonLoaderComponent, IconComponent],
  templateUrl: './input-text.component.html',
  styles: [':host {@apply flex text-inherit relative; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input() label: string | undefined | null = '';
  @Input() description: string | undefined | null = '';
  @Input() required = false;
  @Input() isLoading: boolean = false;
  @Input() type: 'text' | 'email' = 'text';
  @Input() placeholder: string = '';
  @Input() icon ?: string;
  readonly form: FormControl<string | null> = new FormControl<string | null>(
    ''
  );
  disabled = signal<boolean>(false);
  private destroyRef = inject(DestroyRef);
  private onChange: (value: string | null) => void = noop;

  ngOnChanges(changes: SimpleChanges) {
    const disabled = changes['disabled'];
    if (disabled) {
      if (disabled.currentValue) {
        this.form.enable({emitEvent: false});
      } else {
        this.form.disable({emitEvent: false});
      }
    }
  }

  onTouched = (_: string | Event) => {
  };

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

  writeValue(value: string | undefined): void {
    this.form.setValue(value ?? '', {emitEvent: false});
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
      this.disabled.set(true);
    } else {
      this.form.enable();
      this.disabled.set(false);
    }
  }
}
