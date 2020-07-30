import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagementCar } from '../model/ManagementCar';

@Component({
  selector: 'app-carforms',
  templateUrl: './carforms.component.html',
  styleUrls: ['./carforms.component.css']
})
export class CarformsComponent implements OnInit {

  public id = 0;
  public manamentCarForm = new FormGroup({
    code: new FormControl(''),
    gender: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  });
  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.id > 0){
      this.loadData(this.id);
    }
  }

  private createNewData(){
    const newManamentCar = {};
    for(const controlName in this.manamentCarForm.controls){
      if(controlName){
        newManamentCar[controlName] = this.manamentCarForm.controls[controlName].value;
      }
    }
    return newManamentCar as ManagementCar;
  }

  private loadData(id){
    console.log('load data: ',id);
    this.serverHttp.getMannamentCar(id).subscribe((data)=>{
      console.log('getMannamentCar',data);
      for(const controlName in this.manamentCarForm.controls)
      {
        if(controlName){
          this.manamentCarForm.controls[controlName].setValue(data[controlName]);
        }
      }
    });
  }

  public onsubmit(){
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }
  //Thêm danh sach
  public addList()
  {
    if(this.id > 0)
    {
      this.serverHttp.modiflyCars(this.id, this.createNewData()).subscribe(data => {
        this.router.navigate(['vehiclemanagement']);
      });
    }else{
      this.serverHttp.addMannamentCars(this.createNewData()).subscribe(data => {
        this.router.navigate(['vehiclemanagement']);
      });
    }
  }

  //Sửa danh sach
  public editList(){
    if(this.id>0)
    {
      this.serverHttp.modiflyCars(this.id, this.createNewData()).subscribe(data => {
        // console.log("Add Car: ",data);
        // this.router.navigate(['vehiclemanagement']);
      });
    }else{
      this.serverHttp.addMannamentCars(this.createNewData()).subscribe(data => {
        this.common.increamentCar();
        this.manamentCarForm.reset();
      })
    }
  }
}
