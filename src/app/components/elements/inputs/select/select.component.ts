import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  signal
} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {IconComponent} from "../../icon/icon.component";
import {MenuDirective} from "../../../directive/menu/menu.directive";
import {LabelComponent} from "../label/label.component";
import {fromEvent} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

export interface SelectOption {
  label: string;
  description: string;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IconComponent,
    MenuDirective,
    LabelComponent,
  ],
  templateUrl: './select.component.html',
  styles: [':host {@apply flex text-inherit relative; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {
  @Input() label: string | undefined | null = '';
  @Input() description: string | undefined | null = '';
  @Input() required = false;
  @Input() placeholder: string = '';
  @Input() options: SelectOption[] = [];
  @Input() size: 'sm' | 'md' = 'md';
  @Output() onValueChange = new EventEmitter();

  readonly isInputEnabled = signal<boolean>(false);
  readonly height = signal<number>(24)
  readonly _value = signal<string | null>(null);
  private destroyRef = inject(DestroyRef);
  private elementRef: ElementRef = inject(ElementRef);

  @Input() set value(val: string | null) {
    this._value.set(val);
  }

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;
    fromEvent<PointerEvent>(element, 'mouseup').pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((event) => {
      this.isInputEnabled.set(true);
      event.stopPropagation();
    });

    fromEvent<PointerEvent>(document, 'mouseup').pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((event) => {
      this.isInputEnabled.set(false);
    });
  }

  selectOption(option: SelectOption): void {
    this._value.set(option.label);
    this.onValueChange.emit(option);
  }
}
