import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { CategoryComponent } from '@app/category/category.component';
import { ProductComponent } from '@app/product/product.component';
import { ProductFilterPipe } from '@app/product/product-filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import { ProductAddForms1Component } from '@app/product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from '@app/product/product-add-forms2/product-add-forms2.component';
import { LoginComponent } from '@app/login/login.component';
import { LoginGuard } from '@app/login/login.guard';
import { AccountService } from './services/account.service';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddForms2Component,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginGuard, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
