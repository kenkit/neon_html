import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
}) 
export class ProgressComponent implements OnInit, OnChanges {
  @Input() value: number;
  radius = 54;
  circumference = 2 * Math.PI * this.radius;
  dashoffset: number;

  constructor() {
    this.progress(0);
  }

  ngOnInit() {
   }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value.currentValue !== changes.value.previousValue) {
      this.progress(changes.value.currentValue);
      this.renderTime();
    }
  }

  private progress(value: number) {
    const progress = value / 100;
    this.dashoffset = this.circumference * (1 - progress);
  }
  private degToRad(degree) {
    var factor = Math.PI/180;
    return degree*factor;
  }
  
  private renderTime() {
    var canvas : any = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = '#28d1fa';

    ctx.lineWidth = 17;
    ctx.lineCap = 'round';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#28d1fa';
    var now = new Date();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();
    var newSeconds = seconds+ (milliseconds/1000);
    var gradient: any;

    // Background
  gradient = ctx.createRadialGradient(200,200,5,200,200,300);
  gradient.addColorStop(0,'#09303a');
  gradient.addColorStop(1, '#000000');
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,300,300);
  
  // Seconds
   ctx.beginPath();
ctx.arc(125, 125, 110, this.degToRad(270), this.degToRad((newSeconds*6)-90));
  
  ctx.stroke();
  // Date 
  ctx.font = "20px Helvetica";
  ctx.fillStyle = '#28d1fa';
  ctx.fillText("Flashing device", 50, 120);
  
  // Time
  ctx.font = "15px Helvetica";
  ctx.fillStyle = '#28d1fa';
  ctx.fillText("Remaining "+Math.round(newSeconds/60*100)+"%:"+newSeconds,  50, 140);
  
    
  }
}