import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {RouterButtonComponent} from "./router-button/router-button.component";
import {Navigation} from "./navigation.type";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    MatIconModule,
    RouterLinkActive,
    RouterButtonComponent
  ],
  templateUrl: './sidenav.component.html',
  styles: [':host {@apply flex flex-col h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  readonly isHovering = signal<boolean>(false);
  readonly isRouterButtonClicked = signal<boolean>(false);
  readonly mainNavigations: Navigation[] = [
    {
      icon: 'playground',
      name: 'Playground',
      route: ['/', 'playground'],
    },
    {
      icon: 'assistants',
      name: 'Assistants',
      route: ['/', 'assistants',]
    },
    {
      icon: 'fine-tuning',
      name: 'Fine-tuning',
      route: ['/', 'finetune',]
    },
    {
      icon: 'api-keys',
      name: 'API keys',
      route: ['/', 'api-keys']
    },
    {
      icon: 'files',
      name: 'Files',
      route: ['/', 'files',]
    },
    {
      icon: 'usage',
      name: 'Usage',
      route: ['/', 'usage']
    },
    {
      icon: 'settings',
      name: 'Settings',
      route: ['/', 'account'],
      hasSubRoutes: true,
    },
    {
      name: 'Organization',
      route: ['/', 'account', 'organization'],
      isSubRoute: true,
    },
    {
      name: 'Team',
      route: ['/', 'account', 'team'],
      isSubRoute: true,
    },
    {
      name: 'Limits',
      route: ['/', 'account', 'limits'],
      isSubRoute: true,
    },
    {
      name: 'Billings',
      route: ['/', 'account', 'billings'],
      isSubRoute: true,
    },
    {
      name: 'Profile',
      route: ['/', 'account', 'profile'],
      isSubRoute: true,
    },
  ];

  readonly secondNavigations: Navigation[] = [
    {
      icon: 'documentation',
      name: 'Documentation',
      route: ['/', 'docs'],
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

  mouseEnter(): void {
    setTimeout(() => {
      this.isRouterButtonClicked.set(false);
      this.isHovering.set(true);
    })
  }

  mouseLeave(): void {
    setTimeout(() => {
      this.isHovering.set(false);
    })
  }

  clickOnRouterButton(): void {
    this.isRouterButtonClicked.set(true)
  }
}
