import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {Menu} from "../vertical-menu.component";

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu-button.component.html',
  styles: [
    ':host {@apply flex w-full}',
    ':host .active{@apply bg-green-100 text-green-700 font-bold}',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuButtonComponent {
  @Input({required: true}) menu?: Menu;
}
