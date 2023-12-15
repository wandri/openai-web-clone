import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from "../../components/elements/header/header.component";

@Component({
  selector: 'app-api-keys',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './api-keys.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiKeysComponent {

}
