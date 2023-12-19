import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {createRoot, Root} from "react-dom/client";
import React from "react";
import {ReactPieChart} from "./pie-chart";
import {unmountComponentAtNode} from "react-dom";

const containerElementRef = "reactComponentContainer"

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  styles: [':host {@apply h-full w-full}'],
  template: `
      <div #${containerElementRef} id="graph" class="w-full h-full"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() data: number = 0
  @ViewChild(containerElementRef, {static: true}) containerRef!: ElementRef;
  root?: Root;

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
      this.root.render(
        <React.StrictMode>
          <ReactPieChart
            data={data}
            size={this.containerRef.nativeElement.offsetWidth}
          />
        </React.StrictMode>
      )
    }
  }
}
