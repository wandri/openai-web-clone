import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from "../../../components/elements/headers/header/header.component";
import {InputTextComponent} from "../../../components/elements/inputs/input-text/input-text.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "../../../components/elements/buttons/button/button.component";

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [
    HeaderComponent,
    InputTextComponent,
    ReactiveFormsModule,
    ButtonComponent
  ],
  templateUrl: './organization.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationComponent {
  readonly organizationNameForm = new FormControl<string>('Personal');
  readonly organizationIdForm = new FormControl<string>('org-ZNKJCgRMFeW81TwlKivhopdn');

  constructor() {
    this.organizationIdForm.disable();
  }
}
