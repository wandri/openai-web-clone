import {ChangeDetectionStrategy, Component, computed, Input, signal, ViewEncapsulation} from '@angular/core';
import {toBoolean} from "../../../../../shared/utils";
import {NgClass} from "@angular/common";
import {SpinnerComponent} from "../../loaders/spinner/spinner.component";

export type ButtonVariant = 'default' | 'outline' | 'ghost' | 'link';
export type ButtonColor = 'primary' | 'neutral';

type Size = 'xs' | 'md' | 'sm';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass,
    SpinnerComponent
  ],
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() isLoading: boolean = false;

  _size = signal<Size>('sm');

  @Input({required: true}) set size(value: Size) {
    this._size.set(value);
  };

  textProperties = computed<string>(() => {
    switch (this._size()) {
      case 'xs':
        return 'h-5 text-sm';
      case 'sm':
        return 'h-5 text-sm';
      case 'md':
        return 'h-6 text-base';
      default:
        return 'h-6 text-base';
    }
  })

  _color = signal<ButtonColor>('primary');

  @Input() set color(value: ButtonColor) {
    this._color.set(value);
  }

  _disabled = signal<boolean>(false);

  @Input({transform: toBoolean}) set disabled(value: boolean) {
    this._disabled.set(value);
  };

  _variant = signal<ButtonVariant>('default');

  @Input() set variant(value: ButtonVariant) {
    this._variant.set(value);
  }

  clazz = computed<string>(() => {
    const updatedClasses: string[] = [];
    switch (this._size()) {
      case 'xs':
        updatedClasses.push('py-1 px-2');
        break;
      case 'sm':
        updatedClasses.push('py-1.5 px-3');
        break;
      case 'md':
        updatedClasses.push('py-1.5 px-3');
        break;
    }
    if (this._variant() === 'default') {
      if (this._disabled()) {
        updatedClasses.push('bg-gray-50 text-gray-400');
      } else {
        switch (this._color()) {
          case 'primary':
            updatedClasses.push('bg-green-700 hover:bg-green-800 active:bg-green-900 focus:shadow-green text-white')
            break;
          case 'neutral':
            updatedClasses.push('bg-gray-200 active:bg-gray-300 hover:bg-gray-400 focus:shadow-gray text-gray-900')
            break;
        }
      }
    } else if (this._variant() === 'outline') {
      if (this._disabled()) {
        updatedClasses.push('border text-gray-400');
      } else {
        switch (this._color()) {
          case 'primary':
            updatedClasses.push('border border-green-700 active:bg-green-200 hover:bg-green-100 focus:shadow-green text-green-700')
            break;
          case 'neutral':
            updatedClasses.push('border active:bg-gray-200 hover:bg-gray-100 focus:shadow-gray text-gray-900')
            break;
        }
      }
    } else if (this._variant() === 'ghost') {
      if (this._disabled()) {
        updatedClasses.push('text-gray-400');
      } else {
        switch (this._color()) {
          case 'primary':
            updatedClasses.push('active:bg-green-200 hover:bg-green-100 focus:shadow-green text-green-700')
            break;
          case 'neutral':
            updatedClasses.push('active:bg-gray-200 hover:bg-gray-100 focus:shadow-gray text-gray-500')
            break;
        }
      }
    } else if (this._variant() === 'link') {
      if (this._disabled()) {
        updatedClasses.push('bg-gray-50 text-gray-400');
      } else {
        switch (this._color()) {
          case 'primary':
            updatedClasses.push('text-green-700 hover:underline underline-offset-4')
            break;
          case 'neutral':
            updatedClasses.push('text-gray-900 hover:underline underline-offset-4')
            break;
        }
      }
    }

    return updatedClasses.join(' ')
  })
}
