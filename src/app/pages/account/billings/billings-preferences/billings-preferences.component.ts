import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BadgeComponent} from "../../../../components/elements/tag/badge.component";
import {ButtonTextComponent} from "../../../../components/elements/buttons/button-text/button-text.component";
import {CdkTableModule} from "@angular/cdk/table";
import {DatePipe} from "@angular/common";
import {
  SkeletonLoaderComponent
} from "../../../../components/elements/loaders/skeleton-loader/skeleton-loader.component";
import {InputTextComponent} from "../../../../components/elements/inputs/input-text/input-text.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-billings-preferences',
  standalone: true,
  imports: [
    BadgeComponent,
    ButtonTextComponent,
    CdkTableModule,
    DatePipe,
    SkeletonLoaderComponent,
    InputTextComponent,
    ReactiveFormsModule
  ],
  templateUrl: './billings-preferences.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingsPreferencesComponent {
  readonly companyNameForm = new FormControl('John Doe Corp.')
}
