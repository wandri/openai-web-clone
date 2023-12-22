import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {TabRouteComponent} from "../../../navigation/tabs/tab-route/tab-route.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
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
