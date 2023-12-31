import {
  ComponentRef,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  Input,
  OnInit,
  Renderer2,
  TemplateRef
} from '@angular/core';
import {ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {filter, fromEvent, tap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {MenuComponent} from "./menu.component";

@Directive({
  standalone: true,
  selector: '[appMenu]'
})
export class MenuDirective implements OnInit {
  @Input({required: true, alias: "appMenuFor"}) dropdownPanel: TemplateRef<HTMLElement>|null = null;
  @Input({alias: "appMenuDirection"}) appMenuDirection: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Input() appMenuDisabled: boolean = false;
  private elementRef: ElementRef = inject(ElementRef);
  private destroyRef: DestroyRef = inject(DestroyRef);
  private renderer: Renderer2 = inject(Renderer2);
  private overlay: Overlay = inject(Overlay);
  private overlayPositionBuilder: OverlayPositionBuilder = inject(OverlayPositionBuilder);
  private overlayRef?: OverlayRef;

  private isOpened = false;
  private isAttached = false;

  constructor() {
    if (!this.appMenuDisabled) {
      const element = this.elementRef.nativeElement;
      fromEvent<PointerEvent>(element, 'mouseup').pipe(
        tap(() => this.isOpened = !this.isOpened),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe((event) => {
        event.stopPropagation();
        this.show();
      });
      fromEvent<PointerEvent>(document, 'mouseup').pipe(
        tap(() => this.isOpened = false),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe((event) => {
        this.hide()
      });

      fromEvent<KeyboardEvent>(document, 'keydown').pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(event => event.key === 'Escape'),
        tap(() => this.isOpened = false),
      ).subscribe((event) => this.hide());

      this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'relative');
      this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
    }
  }

  ngOnInit() {
    const positions: ConnectedPosition[] = [];
    switch (this.appMenuDirection) {
      case "top":
        positions.push({
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -4
        })
        break;
      case "bottom":
        positions.push({
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetY: 4
        })
        break;
      case "right":
        positions.push({
          originX: 'end',
          originY: 'center',
          overlayX: 'start',
          overlayY: 'center',
          offsetX: 4
        })
        break;
      case "left":
        positions.push({
          originX: 'start',
          originY: 'center',
          overlayX: 'end',
          overlayY: 'center',
          offsetX: -4
        })
        break;
    }
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(positions);
    this.overlayRef = this.overlay.create({positionStrategy});
  }

  hide() {
    if (this.overlayRef && !this.isOpened) {
      this.overlayRef.detach();
      this.isAttached = false;
    }
  }

  private show() {
    if (this.overlayRef && this.isOpened && this.dropdownPanel) {
      this.isOpened = true;
      if (!this.isAttached) {
        this.isAttached = true;
        const componentPortal = new ComponentPortal(MenuComponent);
        const ref: ComponentRef<MenuComponent> = this.overlayRef.attach(componentPortal);
        ref.instance.content = this.dropdownPanel;
        fromEvent<PointerEvent>(ref.location.nativeElement, 'click').pipe(
          tap(() => this.isOpened = !this.isOpened),
          takeUntilDestroyed(this.destroyRef)
        ).subscribe((event) => {
          event.stopPropagation();
        });
      }
    }
  }
}
