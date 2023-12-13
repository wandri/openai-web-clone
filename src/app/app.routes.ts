import {Routes} from '@angular/router';

export const routes: Routes = [
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
    title: () => Promise.resolve('Account')
  },
  {
    path: 'docs',
    loadComponent: () => import('./pages/docs/docs.component').then(mod => mod.DocsComponent),
    title: () => Promise.resolve('Docs')
  },
];
