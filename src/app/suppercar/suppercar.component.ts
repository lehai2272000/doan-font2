import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppercar',
  templateUrl: './suppercar.component.html',
  styleUrls: ['./suppercar.component.css']
})
export class SuppercarComponent implements OnInit {
  public cars = [];
  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  private loadData(){
    this.serverHttp.getMannamentCars().subscribe((data => {
      console.log('cars', data);
      this.cars = data;
    }));
  }
  //Xóa dữ liệu
  public addCar(){
    this.router.navigate(['carform', 0]);
  }

  //Thêm sữ liệu
  public deleteCar(carId){
    console.log('Student', carId);
    this.serverHttp.deleteMannamentCars(carId).subscribe((data)=>{
      console.log('Delete', data);
      this.loadData();
    })
  }

  //Sửa dữ liệu
  public editCar(carId){
    this.router.navigate(['carform', carId]);
  }
}
