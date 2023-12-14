import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-finetune',
  standalone: true,
  imports: [],
  templateUrl: './finetune.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinetuneComponent {

}
