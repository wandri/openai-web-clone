import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ButtonComponent} from "../../../components/elements/buttons/button/button.component";
import {Menu, VerticalMenuComponent} from "../../../components/navigation/vertical-menu/vertical-menu.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    ButtonComponent,
    VerticalMenuComponent,
    RouterOutlet
  ],
  templateUrl: './components.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsComponent {
  readonly navigations: { menu: Menu[], title: string }[] = [{
    title: 'Components', menu: [
      {name: 'button', path: ['/', 'components', 'button']},
      {name: 'input', path: ['/', 'components', 'input']},
    ]
  }];

}
