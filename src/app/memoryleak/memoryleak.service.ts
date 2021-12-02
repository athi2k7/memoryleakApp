import { Injectable } from '@angular/core';
import {Observable, observable,Subject} from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemoryleakService {
// private memoryLeakGenerator$:Observable<number>;
// private subscribersCount=0;
// //  constructor() { }
// public getMemoryNumber():Observable<number>{
//   this.subscribersCount++;
//   if(!this.memoryLeakGenerator$){
//     this.memoryLeakGenerator$=Observable.create((subject:Subject<number>)=>{
//       setInterval(()=>{
//         const number=Math.floor(Math.random()*10);
//         subject.next(number);
//       },1000)
//     });
//   }
//   return this.memoryLeakGenerator$;
// }
// public getSubscribersCount():number{
//   return this.subscribersCount;
// }


}
