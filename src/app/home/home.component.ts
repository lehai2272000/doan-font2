import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name = "Hai";
  public yearOld = 20;
  public vehicles = ['Toyota', 'Lamborghini', 'Mercedes', 'Honda'];
  constructor(private common: CommonService ) {
    // this.yearOld = common.yearOld;
   }

  ngOnInit(): void {
  }

  // public tangtuoi()
  // {
  //   this.common.yearOld++;
  //   this.yearOld = this.common.yearOld;
  // }
  // public giamtuoi()
  // {
  //   this.common.yearOld--;
  //   this.yearOld = this.common.yearOld;
  // }
}
