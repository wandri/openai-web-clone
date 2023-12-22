import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from "../../../components/elements/headers/header/header.component";
import {ButtonTextComponent} from "../../../components/elements/buttons/button-text/button-text.component";
import {InputTextComponent} from "../../../components/elements/inputs/input-text/input-text.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "../../../components/elements/buttons/button/button.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonTextComponent,
    InputTextComponent,
    ReactiveFormsModule,
    ButtonComponent
  ],
  templateUrl: './profile.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  readonly nameForm = new FormControl<string>('John Doe');
  readonly emailForm = new FormControl<string>('john.doe@company.com');
  readonly phoneForm = new FormControl<string>('+33689403381');

  constructor() {
    this.emailForm.disable();
    this.phoneForm.disable();
  }
}
