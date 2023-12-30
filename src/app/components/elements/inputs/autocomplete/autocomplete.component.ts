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
import {map, noop, startWith, tap} from "rxjs";
import {takeUntilDestroyed, toSignal} from "@angular/core/rxjs-interop";
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from "@angular/cdk/menu";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {IconComponent} from "../../icon/icon.component";

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CdkMenu,
    CdkMenuItem,
    CdkMenuTrigger,
    MatAutocompleteModule,
    IconComponent
  ],
  templateUrl: './autocomplete.component.html',
  styles: [':host {@apply flex text-inherit relative; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder: string = '';
  @Input() options: string[] = [];
  @Input() size: 'sm' | 'md' = 'md';
  @Output() onValueChange = new EventEmitter();
  readonly form: FormControl<string | null> = new FormControl<string | null>(
    ''
  );
  readonly isInputEnabled = signal<boolean>(false);
  readonly height = signal<number>(24)
  readonly _value = signal<string | null>(null);
  filteredOptions = toSignal(this.form.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '')),
  ));
  private destroyRef = inject(DestroyRef);
  private onTouched: (value: string) => void = noop;
  private onChange: (value: string | null) => void = noop;

  @Input() set value(val: string | null) {
    this._value.set(val);
    this.form.setValue(val ?? '', {emitEvent: false});
  }

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
    this.form.setValue(this._value() ?? '', {emitEvent: true});
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
    this.form.setValue(value ?? '', {emitEvent: true});
  }

  selectOption(option: string): void {
    this._value.set(option);
    this.onValueChange.emit(option);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
