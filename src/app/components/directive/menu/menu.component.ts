import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  styles: [':host {@apply inline-block}'],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  @Input({required: true}) content!: TemplateRef<HTMLElement>;
}
