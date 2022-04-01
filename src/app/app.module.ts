import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AppHeaderComponent} from './app.header.components';
import { BoxaComponent } from './boxa/boxa.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { RtPcrComponent } from './rt-pcr/rt-pcr.component';
import { SearchComponent } from './search/search.component'
@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AppHeaderComponent,
    BoxaComponent,
    CustomerFormComponent,
    RtPcrComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
