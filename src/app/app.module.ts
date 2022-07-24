import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';
import { HeaderComponent } from './header/header.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component'
import {ToastModule} from 'primeng/toast';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FilterService, MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import { UserService } from './user.service';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {CardModule} from 'primeng/card';
import { FileuploadComponent } from './fileupload/fileupload.component';






@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    UserlistComponent,
    HeaderComponent,
    UpdateuserComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    LoginComponent,
    UserDetailComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    CalendarModule,
    DynamicDialogModule,
    CardModule

  ],
  providers: [MessageService,FilterService,DialogService],
  bootstrap: [AppComponent],
  entryComponents:[UserDetailComponent]
})
export class AppModule { }
