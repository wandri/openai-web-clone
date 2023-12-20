import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './profile-picture.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePictureComponent {

}
