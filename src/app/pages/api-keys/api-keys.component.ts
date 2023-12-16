import {ChangeDetectionStrategy, Component, computed} from '@angular/core';
import {HeaderComponent} from "../../components/elements/headers/header/header.component";
import {CdkTableModule} from "@angular/cdk/table";
import {DatePipe} from "@angular/common";
import {ButtonIconComponent} from "../../components/elements/buttons/button-icon/button-icon.component";
import {ButtonComponent} from "../../components/elements/buttons/button/button.component";
import {MatIconModule} from "@angular/material/icon";
import {SelectDropdownComponent} from "../../components/elements/inputs/select-dropdown/select-dropdown.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {delay, of, startWith} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {SkeletonLoaderComponent} from "../../components/elements/loaders/skeleton-loader/skeleton-loader.component";

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
    SelectDropdownComponent,
    SkeletonLoaderComponent
  ],
  templateUrl: './api-keys.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiKeysComponent {
  readonly isLoading = toSignal(of(false).pipe(
    delay(1_000),
    startWith(true)
  ));
  readonly displayedColumns = ['name', 'key', 'createdAt', 'lastUsedAt', 'action'];
  readonly datasource = computed(() => {
    if (this.isLoading()) {
      return [];
    } else {
      return new MatTableDataSource<{
        name: string,
        key: string,
        createdAt: Date,
        lastUsedAt: Date
      }>([
        {
          name: 'Personal key',
          key: 'sk-...er5L',
          createdAt: new Date('01/01/2022'),
          lastUsedAt: new Date('05/05/2022'),
        }
      ])
    }
  });
}
