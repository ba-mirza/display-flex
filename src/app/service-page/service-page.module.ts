import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ServicePageComponent } from './service-component/service-page.component';
import { MedcenterPageRoutingModule } from './service-page-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ServicePageComponent
  ],
  imports: [
    CommonModule,
    MedcenterPageRoutingModule,
    HttpClientModule
  ]
})
export class ServicePageModule { }
