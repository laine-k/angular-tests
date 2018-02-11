import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MockService } from "./mock.service";
import { MockServiceComponent } from './mock-service/mock-service.component';
import { FakeApiServiceComponent } from './fake-api-service/fake-api-service.component';


@NgModule({
  declarations: [
    AppComponent,
    MockServiceComponent,
    FakeApiServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
