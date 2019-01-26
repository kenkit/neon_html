import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Neon Project';
  readonly progress: Observable<number>;

  constructor() {
    this.progress = this.emulateProgress();
  }

  emulateProgress() {
    return new Observable<number>(observer => {
      let val = 0;
      const interval = setInterval(() => { 
        if (val < 100) {
          val++;
        } else {
          val = 0;
        }

        observer.next(val);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    });
  }
}
