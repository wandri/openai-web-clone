import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-tab-route',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './tab-route.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabRouteComponent {
  @Input() selections: { name: string; route: string[] }[] = [];
}
