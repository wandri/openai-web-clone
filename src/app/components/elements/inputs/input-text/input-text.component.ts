import {ChangeDetectionStrategy, Component, DestroyRef, forwardRef, inject, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {noop, tap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {MatIconModule} from '@angular/material/icon';
import {LabelComponent} from "../label/label.component";
import {SkeletonLoaderComponent} from "../../loaders/skeleton-loader/skeleton-loader.component";

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LabelComponent, MatIconModule, SkeletonLoaderComponent],
  templateUrl: './input-text.component.html',
  styles: [':host {@apply flex overflow-auto text-inherit relative; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent implements ControlValueAccessor, OnInit {
  @Input() label?: string = '';
  @Input() isLoading: boolean = false;
  @Input() type: 'text' | 'email' = 'text';
  @Input() placeholder: string = '';
  @Input() description?: string = '';
  @Input() required = false;
  @Input() icon ?: string;
  readonly form: FormControl<string | null> = new FormControl<string | null>(
    ''
  );
  private destroyRef = inject(DestroyRef);
  private onChange: (value: string | null) => void = noop;

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
}
