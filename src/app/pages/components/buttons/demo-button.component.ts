import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ButtonComponent, ButtonVariant} from "../../../components/elements/buttons/button/button.component";
import {VerticalMenuComponent} from "../../../components/navigation/vertical-menu/vertical-menu.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-demo-button',
  standalone: true,
  imports: [
    ButtonComponent,
    VerticalMenuComponent,
    RouterOutlet
  ],
  templateUrl: './demo-button.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoButtonComponent {
  buttonVariants: ButtonVariant[] = ['default', 'outline', 'ghost', 'link'];
}
