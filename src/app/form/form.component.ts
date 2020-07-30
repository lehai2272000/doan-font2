import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public name = '';
  public pass = '';
  public vehicles = ['Toyota', 'Lamborghini', 'Mercedes', 'Honda'];
  private selectedVehicle = '';
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log('onSubmit');
    console.log('name = '+this.name);
    console.log('password = '+this.pass);
    console.log('Vehicle = '+this.selectedVehicle);
  }

  public selectVehicle(event){
    //console.log('selectVehicle', event.target.value);
    this.selectedVehicle = event.target.value;
  }

}
