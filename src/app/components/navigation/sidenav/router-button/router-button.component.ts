import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-router-button',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIconModule
  ],
  templateUrl: './router-button.component.html',
  styles: [':host .customIconSize {@apply w-5 h-5 min-w-[1.25rem]; }', ':host .active {@apply bg-green-100 text-green-700 hover:bg-green-100 hover:text-green-700 font-semibold; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouterButtonComponent {
  @Input({required: true}) navigation!: {
    icon?: string,
    name: string,
    route: string[],
    isSubRoute?: boolean,
    hasSubRoutes?: boolean
  };
  @Input({required: true}) isHovering: boolean = false
}
