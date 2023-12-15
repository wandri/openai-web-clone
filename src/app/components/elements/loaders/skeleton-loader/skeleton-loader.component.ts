import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  standalone: true,
  imports: [],
  templateUrl: './skeleton-loader.component.html',
  styleUrl: './skeleton-loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonLoaderComponent {

}
