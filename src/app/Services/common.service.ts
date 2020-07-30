import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public totalCar = 0;
  public totalCar$ = new BehaviorSubject<number>(0);
  // public yearOld = 18;
  // constructor() { }

  // public tangtuoi()
  // {
  //   this.yearOld++;
  // }
  // public giamtuoi()
  // {
  //   this.yearOld--;
  // }

  public setTotalCar(total: number){
    this.totalCar = total;
    this.totalCar$.next(total);
  }

  public increamentCar() {
    this.totalCar++;
    this.totalCar$.next(this.totalCar);
  }
}
