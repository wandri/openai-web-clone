import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {SidenavComponent} from "./components/navigation/sidenav/sidenav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidenavComponent],
  templateUrl: './app.component.html',
  styles: [':host {@apply flex flex-col h-full w-full;}'],
})
export class AppComponent {
  title = 'openai-web-clone';
}
