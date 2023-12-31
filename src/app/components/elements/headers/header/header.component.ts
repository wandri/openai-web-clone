import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TabRouteComponent} from "../../../navigation/tabs/tab-route/tab-route.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TabRouteComponent
  ],
  templateUrl: './header.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input({required: true}) title?: string;
  @Input() tabs?: { name: string; route: string[] }[];
}
