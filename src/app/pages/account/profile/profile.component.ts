import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from "../../../components/elements/headers/header/header.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './profile.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {

}
