import {Routes} from "@angular/router";
import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'app-empty-test-component',
  standalone: true,
  imports: [],
  template: '<div></div>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyTestComponent {
}


export const mockedRoutes: Routes = [
  {
    path: "tab1",
    component: EmptyTestComponent,
  },
  {
    path: "tab2",
    component: EmptyTestComponent,
  },
  {
    path: "**",
    redirectTo: "tab1",
    pathMatch: "full",
  },
];
