import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-docs-api-reference',
  standalone: true,
  imports: [],
  templateUrl: './docs-api-reference.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocsApiReferenceComponent {

}
