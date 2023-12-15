import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from "../../components/elements/header/header.component";

@Component({
  selector: 'app-finetune',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './finetune.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinetuneComponent {

}
