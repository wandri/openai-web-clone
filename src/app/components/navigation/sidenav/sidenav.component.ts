import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    MatIconModule,
    RouterLinkActive
  ],
  templateUrl: './sidenav.component.html',
  styles: [':host {@apply flex flex-col h-full w-full;}', '.customIconSize {@apply w-5 h-5 min-w-[1.25rem]; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  readonly mainNavigations: { icon: string, name: string, route: string }[] = [
    {
      icon: 'playground',
      name: 'Playground',
      route: 'playground',
    },
    {
      icon: 'assistants',
      name: 'Assistants',
      route: 'assistants',
    },
    {
      icon: 'fine-tuning',
      name: 'Fine-tuning',
      route: 'finetune',
    },
    {
      icon: 'api-keys',
      name: 'API keys',
      route: 'api-keys'
    },
    {
      icon: 'files',
      name: 'Files',
      route: 'Files',
    },
    {
      icon: 'usage',
      name: 'Usage',
      route: 'usage'
    },
    {
      icon: 'settings',
      name: 'Settings',
      route: 'account'
    },
  ];

  readonly secondNavigations: { icon: string, name: string, route?: string, run?: () => void }[] = [
    {
      icon: 'documentation',
      name: 'Documentation',
      route: 'docs',
    },
    {
      icon: 'help',
      name: 'Help',
      run: () => {
      },
    },
    {
      icon: 'all-products',
      name: 'All products',
      run: () => {
      },
    },
  ]
}
