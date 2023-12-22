import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from "../../../../components/elements/headers/header/header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-billings',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './billings.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingsComponent {

}
