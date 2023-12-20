import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {HighlightDirective} from "../../../directive/highlight/highlight.directive";

@Component({
  selector: 'app-header-with-sub-header',
  standalone: true,
  imports: [
    MatIconModule,
    HighlightDirective
  ],
  templateUrl: './header-with-sub-header.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderWithSubHeaderComponent {
  @Input({required: true}) title?: string;
  @Input() titleTooltip?: string;
}
