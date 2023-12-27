import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from "../../../components/elements/headers/header/header.component";
import {HeaderTabComponent} from "../../../components/elements/headers/header-tab/header-tab.component";
import {RouterOutlet} from "@angular/router";
import {ButtonComponent} from "../../../components/elements/buttons/button/button.component";
import {ButtonTextComponent} from "../../../components/elements/buttons/button-text/button-text.component";
import {IconComponent} from "../../../components/elements/icon/icon.component";

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderTabComponent,
    RouterOutlet,
    ButtonComponent,
    ButtonTextComponent,
    IconComponent
  ],
  templateUrl: './docs.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocsComponent {
  readonly tabs: { name: string; route: string[] }[] = [
    {name: 'Documentation', route: ['/', 'docs', 'overview']},
    {name: 'API reference', route: ['/', 'docs', 'api-reference']},
  ]
}
