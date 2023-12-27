import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {TabRouteComponent} from "../../../navigation/tabs/tab-route/tab-route.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header-tab',
  standalone: true,
  imports: [
    MatIconModule,
    TabRouteComponent,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './header-tab.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderTabComponent {
  @Input({required: true}) tabs: { name: string; route: string[] }[] = [];
}
