import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MenuButtonComponent} from "./menu-button/menu-button.component";

export interface Menu {
  name: string,
  path: string[],
  children?: Menu[]
}

@Component({
  selector: 'app-vertical-menu',
  standalone: true,
  imports: [
    MenuButtonComponent
  ],
  templateUrl: './vertical-menu.component.html',
  styles: [':host {@apply flex flex-col h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalMenuComponent {
  @Input() navigations: { menu: Menu[], title: string }[] = []
}
