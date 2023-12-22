import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'playground',
    pathMatch: 'full'
  },
  {
    path: 'playground',
    loadComponent: () => import('./pages/playground/playground.component').then(mod => mod.PlaygroundComponent),
    title: () => Promise.resolve('Playground')
  },
  {
    path: 'assistants',
    loadComponent: () => import('./pages/assistants/assistants.component').then(mod => mod.AssistantsComponent),
    title: () => Promise.resolve('Assistants')
  },
  {
    path: 'finetune',
    loadComponent: () => import('./pages/finetune/finetune.component').then(mod => mod.FinetuneComponent),
    title: () => Promise.resolve('Fine-tune')
  },
  {
    path: 'assistants',
    loadComponent: () => import('./pages/assistants/assistants.component').then(mod => mod.AssistantsComponent),
    title: () => Promise.resolve('Assistants')
  },
  {
    path: 'api-keys',
    loadComponent: () => import('./pages/api-keys/api-keys.component').then(mod => mod.ApiKeysComponent),
    title: () => Promise.resolve('API keys')
  },
  {
    path: 'files',
    loadComponent: () => import('./pages/files/files.component').then(mod => mod.FilesComponent),
    title: () => Promise.resolve('Files')
  },
  {
    path: 'usage',
    loadComponent: () => import('./pages/usage/usage.component').then(mod => mod.UsageComponent),
    title: () => Promise.resolve('Usage')
  },
  {
    path: 'account',
    loadComponent: () => import('./pages/account/account.component').then(mod => mod.AccountComponent),
    title: () => Promise.resolve('Account'),
    children: [
      {
        path: '',
        redirectTo: 'organization', pathMatch: 'full'
      },
      {
        path: 'organization',
        loadComponent: () => import('./pages/account/organization/organization.component').then(mod => mod.OrganizationComponent),
        title: () => Promise.resolve('organization')
      },
      {
        path: 'team',
        loadComponent: () => import('./pages/account/team/team.component').then(mod => mod.TeamComponent),
        title: () => Promise.resolve('Team')
      },
      {
        path: 'limits',
        loadComponent: () => import('./pages/account/limits/limits.component').then(mod => mod.LimitsComponent),
        title: () => Promise.resolve('Limits')
      },
      {
        path: 'billings',
        loadComponent: () => import('./pages/account/billings/page/billings.component').then(mod => mod.BillingsComponent),
        title: () => Promise.resolve('Billings'),
        children: [
          {
            path: '',
            redirectTo: 'overview', pathMatch: 'full'
          },
          {
            path: 'overview',
            loadComponent: () => import('./pages/account/billings/billings-overview/billings-overview.component').then(mod => mod.BillingsOverviewComponent),
            title: () => Promise.resolve('Billings - overview'),
          },
          {
            path: 'payment-methods',
            loadComponent: () => import('./pages/account/billings/billings-payment-methods/billings-payment-methods.component').then(mod => mod.BillingsPaymentMethodsComponent),
            title: () => Promise.resolve('Billings - payment methods'),
          },
          {
            path: 'history',
            loadComponent: () => import('./pages/account/billings/billings-history/billings-history.component').then(mod => mod.BillingsHistoryComponent),
            title: () => Promise.resolve('Billings - history'),
          },
          {
            path: 'preferences',
            loadComponent: () => import('./pages/account/billings/billings-preferences/billings-preferences.component').then(mod => mod.BillingsPreferencesComponent),
            title: () => Promise.resolve('Billings - preferences'),
          },
        ]
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/account/profile/profile.component').then(mod => mod.ProfileComponent),
        title: () => Promise.resolve('Profile')
      },
    ]
  },
  {
    path: 'docs',
    loadComponent: () => import('./pages/docs/docs.component').then(mod => mod.DocsComponent),
    title: () => Promise.resolve('Docs')
  },
  {
    path: '**',
    redirectTo: 'playground',
    pathMatch: 'full'
  },
];
