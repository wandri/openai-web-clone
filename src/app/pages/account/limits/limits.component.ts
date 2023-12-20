import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from "../../../components/elements/headers/header/header.component";
import {NoticeComponent} from "../../../components/elements/notice/notice.component";

@Component({
  selector: 'app-limits',
  standalone: true,
  imports: [
    HeaderComponent,
    NoticeComponent
  ],
  templateUrl: './limits.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LimitsComponent {

}
