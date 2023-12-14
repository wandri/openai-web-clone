import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-api-keys',
  standalone: true,
  imports: [],
  templateUrl: './api-keys.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiKeysComponent {

}
