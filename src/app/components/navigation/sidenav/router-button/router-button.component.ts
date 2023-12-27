import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

import {Navigation} from "../navigation.type";
import {IconComponent} from "../../../elements/icon/icon.component";

@Component({
  selector: 'app-router-button',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IconComponent
  ],
  templateUrl: './router-button.component.html',
  styles: [':host .active {@apply bg-green-100 text-green-700 hover:bg-green-100 hover:text-green-700 font-semibold; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouterButtonComponent {
  @Input({required: true}) navigation!: Navigation;
  @Input({required: true}) isActive: boolean = false
}
