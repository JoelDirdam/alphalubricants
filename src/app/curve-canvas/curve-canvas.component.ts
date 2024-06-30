import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curve-canvas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <canvas #canvas1></canvas>
    <canvas #canvas2></canvas>
  `,
  styleUrls: ['./curve-canvas.component.css']
})
export class CurveCanvasComponent implements AfterViewInit {
  @ViewChild('canvas1', { static: true }) canvas1!: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas2', { static: true }) canvas2!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    this.drawCurve(this.canvas1.nativeElement);
    this.drawSecondCurve(this.canvas2.nativeElement);
  }

  drawCurve(canvas: HTMLCanvasElement): void {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.beginPath();
      ctx.moveTo(180, -200);
      ctx.quadraticCurveTo(150, 150, 450, 200);
      ctx.lineWidth = 100;

      // Line color
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, '#FFD000');
      gradient.addColorStop(1, '#FF0000');
      ctx.strokeStyle = gradient;

      ctx.lineCap = 'round';
      ctx.stroke();
    }
  }

  drawSecondCurve(canvas: HTMLCanvasElement): void {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(500, -50);
      ctx.quadraticCurveTo(400, 250, 688, 250);
      ctx.lineWidth = 90;

      // Line color
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, '#00FF00');
      gradient.addColorStop(1, '#0000FF');
      ctx.strokeStyle = gradient;

      ctx.lineCap = 'round';
      ctx.stroke();
    }
  }
}
