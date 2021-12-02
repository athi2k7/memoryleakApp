import { Component,Input } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()
  title: string;

  constructor(){
    this.title = 'memoryLeakApp';
    //*********Observable example */
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('just before subscribe');
observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');

//*********function example */
function sum1(a:number, b:number) {
  return a + b;
}
const sum2 = function(a:number, b:number) {
  return a + b;
}
const sum3 = (a:number, b:number) => a + b;
console.log(typeof sum1 === 'function'); // => true
console.log(typeof sum2 === 'function'); // => true
console.log(sum3(5,8)); // => true

  }
  ngOnInit(){
    console.log(this.title);  
    }
  }
  