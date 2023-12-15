import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './account.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent {

}
