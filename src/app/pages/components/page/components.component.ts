import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ButtonComponent, ButtonVariant} from "../../../components/elements/buttons/button/button.component";

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './components.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsComponent {
  buttonVariants: ButtonVariant[] = ['default', 'outline', 'ghost', 'link'];
}
