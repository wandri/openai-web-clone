import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-header-with-sub-header',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './header-with-sub-header.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderWithSubHeaderComponent {
  @Input({required: true}) title?: string;
}
