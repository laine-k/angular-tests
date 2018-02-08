import { Component, OnInit } from '@angular/core';
import { MockService } from "./mock.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  iconColor:{};
  iconColor2;
  constructor(private mockService: MockService){

  }
  ngOnInit(){
   this.getIconColor();
  }
  getIconColor():void{
    this.iconColor = this.mockService.getMockStatus();
    console.log(this.iconColor);
  }

  getIconColorAsObs():void{
    this.mockService.getMockStatusObs().subscribe(data => this.iconColor2 = data);
  }
 
}
