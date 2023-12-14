import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [],
  templateUrl: './docs.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocsComponent {

}
