import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// tambah ini get
import { HttpClientModule } from '@angular/common/http';
import { BusinessService } from './business.services';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClient } from 'selenium-webdriver/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GstDetailComponent } from './gst-detail/gst-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent,
    GstGetComponent,
    GstDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
