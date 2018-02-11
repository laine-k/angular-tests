import { Component, OnInit } from '@angular/core';
import { MockService } from "../mock.service";

@Component({
  selector: 'app-mock-service',
  templateUrl: './mock-service.component.html',
  styleUrls: ['./mock-service.component.css']
})
export class MockServiceComponent implements OnInit {

 
  title = 'Angular tests';
  mockServiceWObs = `getMockStatus(){
    let timeObj = {"currentTime":new Date()}
    return timeObj;
  }`;
  mockServiceObs = `getMockStatusObs():Observable<Object>{
    let timeObj = {"currentTime":new Date()}
    return of(timeObj);
  }`;
  mockData1;
  mockData2;
  time1;
  time2;
  testObj1;
  timeObj2:any = {"currentTime":new Date()} ;
  testObj = {"name":"Jakob"};
  constructor(private mockService: MockService){

  }
  ngOnInit(){
  }

  getIconColor():void{
    this.mockData1 = this.mockService.getMockStatus();
    this.testObj1 = this.mockData1;
    this.mockData1 = JSON.stringify(this.mockData1);
    
  }

  getIconColorAsObs():void{
    this.mockService.getMockStatusObs().subscribe(data => 
      {this.mockData2 = JSON.stringify(data);
        this.timeObj2 = data;
      this.time2 = this.timeObj2.currentTime;
    }
    )
  }
 
}

