import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  HeaderWithSubHeaderComponent
} from "../../components/elements/headers/header-with-sub-header/header-with-sub-header.component";
import {SelectionButtonComponent} from "../../components/elements/buttons/multi-buttons/selection-button.component";
import {ButtonComponent} from "../../components/elements/buttons/button/button.component";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [
    HeaderWithSubHeaderComponent,
    SelectionButtonComponent,
    ButtonComponent,
    MatIconModule
  ],
  templateUrl: './files.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilesComponent {
  readonly fileSortOptions = [
    {text: 'Date'},
    {text: 'Name'},
  ]
  readonly directionSortOptions = [
    {text: 'Desc'},
    {text: 'Asc'},
  ]
}
