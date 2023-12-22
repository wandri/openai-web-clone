import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NoticeComponent} from "../../../../components/elements/notice/notice.component";
import {ButtonTextComponent} from "../../../../components/elements/buttons/button-text/button-text.component";
import {ButtonComponent} from "../../../../components/elements/buttons/button/button.component";
import {IconComponent} from "../../../../components/elements/icon/icon.component";
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-billings-overview',
  standalone: true,
  imports: [
    NoticeComponent,
    ButtonTextComponent,
    ButtonComponent,
    IconComponent,
    NgClass,
    RouterLink
  ],
  templateUrl: './billings-overview.component.html',
  styles: [':host {@apply flex flex-col w-full h-full}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingsOverviewComponent {

  readonly linkButtons: {
    svgIcon: string,
    background: string,
    title: string,
    description: string,
    link: string[],
    isExternalLink: boolean
  }[] = [
    {
      svgIcon: 'credit-card',
      background: 'from-green-500 to-emerald-500',
      title: 'Payment methods',
      description: 'Add or change payment methods',
      link: ['..', 'payment-methods'],
      isExternalLink: false,
    },
    {
      svgIcon: 'document',
      background: 'from-violet-500 to-purple-500',
      title: 'Billing history',
      description: 'View past and current invoices',
      link: ['..', 'history'],
      isExternalLink: false,
    },
    {
      svgIcon: 'settings',
      background: 'from-pink-500 to-fuchsia-500',
      title: 'Preferences',
      description: 'Manage billing information',
      link: ['..', 'preferences'],
      isExternalLink: false,
    },
    {
      svgIcon: 'fine-tuning',
      background: 'from-red-500 to-rose-500',
      title: 'Usage limits',
      description: 'Set monthly spend limits',
      link: ['/', 'account', 'limits'],
      isExternalLink: false,
    },
    {
      svgIcon: 'usage',
      background: 'from-yellow-500 to-amber-500',
      title: 'Pricing',
      description: 'View pricing and FAQs',
      link: ['/', 'account', 'limits'],
      isExternalLink: true,
    },
  ]
}
