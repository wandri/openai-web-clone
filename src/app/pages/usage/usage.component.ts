import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from "../../components/elements/header/header.component";

@Component({
  selector: 'app-usage',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './usage.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsageComponent {

}
