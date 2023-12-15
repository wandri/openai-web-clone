import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from "../../components/elements/headers/header/header.component";
import {CdkTableModule} from "@angular/cdk/table";
import {MatTableDataSource} from "@angular/material/table";
import {DatePipe} from "@angular/common";
import {ButtonIconComponent} from "../../components/elements/buttons/button-icon/button-icon.component";
import {ButtonComponent} from "../../components/elements/buttons/button/button.component";
import {MatIconModule} from "@angular/material/icon";
import {SelectDropdownComponent} from "../../components/elements/inputs/select-dropdown/select-dropdown.component";

@Component({
  selector: 'app-api-keys',
  standalone: true,
  imports: [
    HeaderComponent,
    CdkTableModule,
    DatePipe,
    ButtonIconComponent,
    ButtonComponent,
    MatIconModule,
    SelectDropdownComponent
  ],
  templateUrl: './api-keys.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiKeysComponent {
  readonly displayedColumns = ['name', 'key', 'createdAt', 'lastUsedAt', 'action'];
  readonly datasource = new MatTableDataSource<{ name: string, key: string, createdAt: Date, lastUsedAt: Date }>([
    {
      name: 'Personal key',
      key: 'sk-...er5L',
      createdAt: new Date('01/01/2022'),
      lastUsedAt: new Date('05/05/2022'),
    }
  ]);
}
