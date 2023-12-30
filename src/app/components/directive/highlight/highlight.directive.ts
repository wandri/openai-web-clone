import {
  ComponentRef,
  DestroyRef,
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';
import {Overlay, OverlayPositionBuilder, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {TooltipComponent} from './tooltip/tooltip.component';
import {delay, fromEvent, takeWhile, tap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Directive({
  standalone: true,
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  elementRef: ElementRef = inject(ElementRef);
  destroyRef: DestroyRef = inject(DestroyRef);
  renderer: Renderer2 = inject(Renderer2);
  @Input() highlightLink?: string;
  @Input() appHighlightTooltip?: string;
  @Input() appHighlightDisabled: boolean = false;
  private overlay: Overlay = inject(Overlay);
  private overlayPositionBuilder: OverlayPositionBuilder = inject(OverlayPositionBuilder);
  private overlayRef?: OverlayRef;

  private isOpened = false;
  private isAttached = false;

  constructor() {
    // TODO: appHighlightDisabled should be dynamic.
    if (!this.appHighlightDisabled) {
      const element = this.elementRef.nativeElement;
      fromEvent(element, 'mouseenter').pipe(
        tap(() => this.isOpened = true),
        delay(250),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(() => this.show());
      fromEvent(element, 'mouseleave').pipe(
        tap(() => this.isOpened = false),
        delay(750),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(() => this.hide());
      this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'relative');
      this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
      this.renderer.addClass(this.elementRef.nativeElement, 'group');
      this.drawLine();
    }
  }

  ngOnInit() {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        offsetY: 10
      }]);
    this.overlayRef = this.overlay.create({positionStrategy});
  }

  @HostListener('click')
  onClick(): void {
    if (this.highlightLink) {
      window.open(this.highlightLink, '_blank');
    }
  }

  private drawLine(): void {
    const underlineDiv = this.renderer.createElement('div');

    this.renderer.addClass(underlineDiv, 'group-hover:border-gray-500');
    this.renderer.addClass(underlineDiv, 'absolute');
    this.renderer.addClass(underlineDiv, 'bottom-0');
    this.renderer.addClass(underlineDiv, 'left-0');
    this.renderer.addClass(underlineDiv, 'border-b');
    this.renderer.addClass(underlineDiv, 'border-dotted');
    this.renderer.addClass(underlineDiv, 'border-gray-400');
    this.renderer.addClass(underlineDiv, 'w-full');

    this.renderer.appendChild(this.elementRef.nativeElement, underlineDiv);
  }

  private show() {
    if (!!this.appHighlightTooltip && this.overlayRef && this.isOpened) {
      this.isOpened = true;
      const tooltipPortal = new ComponentPortal(TooltipComponent);

      if (!this.isAttached) {
        this.isAttached = true;
        const tooltipRef: ComponentRef<TooltipComponent> = this.overlayRef.attach(tooltipPortal);
        tooltipRef.instance.text = this.appHighlightTooltip;
        fromEvent(tooltipRef.location.nativeElement, 'mouseenter').pipe(
          tap(() => this.isOpened = true),
          takeWhile(() => this.isAttached)
        ).subscribe(() => this.show());
        fromEvent(tooltipRef.location.nativeElement, 'mouseleave').pipe(
          tap(() => this.isOpened = false),
          delay(750),
          takeWhile(() => this.isAttached)
        ).subscribe(() => this.hide());
      }
    }
  }

  private hide() {
    if (!!this.appHighlightTooltip && this.overlayRef && !this.isOpened) {
      this.overlayRef.detach();
      this.isAttached = false;
    }
  }
}
