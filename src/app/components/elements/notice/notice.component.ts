import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [
    MatIconModule,
    IconComponent
  ],
  templateUrl: './notice.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoticeComponent {
  @Input() svgIcon: string = "information";
}
