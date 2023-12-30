import {AfterViewInit, ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {RouterButtonComponent} from "./router-button/router-button.component";
import {Navigation} from "./navigation.type";
import {ProfilePictureComponent} from "../../elements/user/profil-picture/profile-picture.component";
import {MenuDirective} from "../../directive/menu/menu.directive";
import {fromEvent, map} from "rxjs";
import {getDeviceDimension, SIZE} from "./size";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    MatIconModule,
    RouterLinkActive,
    RouterButtonComponent,
    ProfilePictureComponent,
    MenuDirective
  ],
  templateUrl: './sidenav.component.html',
  styles: [':host {@apply flex flex-col h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements AfterViewInit {
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
      children: [
        {
          name: 'Organization',
          route: ['/', 'account', 'organization'],
        },
        {
          name: 'Team',
          route: ['/', 'account', 'team'],
        },
        {
          name: 'Limits',
          route: ['/', 'account', 'limits'],
        },
        {
          name: 'Billings',
          route: ['/', 'account', 'billings'],
        },
        {
          name: 'Profile',
          route: ['/', 'account', 'profile'],
        },
      ],
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
    },
    {
      icon: 'all-products',
      name: 'All products',
      run: () => {
      },
    },
  ]
  private size = signal<SIZE | undefined>(undefined);
  readonly isSidenavFullyDisplayed = computed(() => (this.isHovering() && !this.isRouterButtonClicked()) || (this.size() === SIZE.XL || this.size() === SIZE.XXL))

  constructor() {
    fromEvent(window, 'resize').pipe(
      map(() => getDeviceDimension(window.innerWidth))
    )
      .subscribe(dimension => this.size.set(dimension));
  }

  ngAfterViewInit(): void {
    this.size.set(getDeviceDimension(window.innerWidth))
  }

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
