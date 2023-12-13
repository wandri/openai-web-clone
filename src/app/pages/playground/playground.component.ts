import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [],
  templateUrl: './playground.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaygroundComponent {

}
