import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-assistants',
  standalone: true,
  imports: [],
  templateUrl: './assistants.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssistantsComponent {

}
