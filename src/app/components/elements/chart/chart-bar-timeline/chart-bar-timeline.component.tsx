import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  signal,
  ViewChild
} from '@angular/core';
import {createRoot, Root} from "react-dom/client";
import React from "react";
import {ChartBarTimeline} from "./chart-bar-timeline";
import {unmountComponentAtNode} from "react-dom";

export type LineChartDatum = { date: Date } & Record<string, number | Date>

const containerElementRef = "reactComponentContainer"

@Component({
  selector: 'app-chart-bar-timeline',
  standalone: true,
  styles: [':host {@apply h-full w-full}'],
  template: `
      <div #${containerElementRef} id="graph" class="w-full h-full"
           (mouseenter)="isHovering.set(true)"
           (mouseleave)="isHovering.set(false)"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartBarTimelineComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() data: LineChartDatum[] = []
  @ViewChild(containerElementRef, {static: true}) containerRef!: ElementRef;
  root?: Root;

  isHovering = signal<boolean>(false)

  constructor() {
    effect(() => {
      this.render();
    })
  }

  ngOnChanges(): void {
    this.render();
  }

  ngAfterViewInit() {
    this.root = createRoot(this.containerRef.nativeElement);
    this.render();
  }

  ngOnDestroy() {
    unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {
    if (this.root) {
      const {data} = this;
      const isHovering = this.isHovering();
      this.root.render(
        <React.StrictMode>
          <ChartBarTimeline
            data={data}
            isOvering={isHovering}
          />
        </React.StrictMode>
      )
    }
  }
}
