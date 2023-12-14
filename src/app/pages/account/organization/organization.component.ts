import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [],
  templateUrl: './organization.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationComponent {

}
