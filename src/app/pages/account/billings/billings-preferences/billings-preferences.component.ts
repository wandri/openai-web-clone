import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-billings-preferences',
  standalone: true,
  imports: [],
  templateUrl: './billings-preferences.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingsPreferencesComponent {

}
