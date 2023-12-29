import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  OnInit,
  Output,
  signal
} from '@angular/core';
import {ControlValueAccessor, FormControl, ReactiveFormsModule} from "@angular/forms";
import {noop, tap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from "@angular/cdk/menu";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {IconComponent} from "../../icon/icon.component";

@Component({
  selector: 'app-select-dropdown',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CdkMenu,
    CdkMenuItem,
    CdkMenuTrigger,
    MatAutocompleteModule,
    IconComponent
  ],
  templateUrl: './select-dropdown.component.html',
  styles: [':host {@apply flex text-inherit relative; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectDropdownComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder: string = '';
  @Input() value: string | null = 'Personal';
  @Input() options: string[] = ['Personal', 'Pro'];
  @Input() size: 'sm' | 'md' = 'md';
  @Output() onValueChange = new EventEmitter();
  readonly form: FormControl<string | null> = new FormControl<string | null>(
    ''
  );
  readonly isInputEnabled = signal<boolean>(false);
  readonly height = signal<number>(24)
  private destroyRef = inject(DestroyRef);
  private onTouched: (value: string) => void = noop;
  private onChange: (value: string | null) => void = noop;

  @HostListener('click', ['$event'])
  clickInside($event: Event): void {
    this.isInputEnabled.set(true);
    $event.stopPropagation();
  }

  @HostListener('document:click')
  clickOutside(): void {
    this.isInputEnabled.set(false)
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

  writeValue(value: string | undefined): void {
    this.form.setValue(value ?? '', {emitEvent: false});
  }
}
