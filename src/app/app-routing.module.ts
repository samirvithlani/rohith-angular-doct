import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes: Routes = [
  {
    path:'adduser',component:AdduserComponent
  },
  {
    path:'listuser',component:UserlistComponent
  },
  {
    path:'listuser/updateuser/:id',component:UpdateuserComponent
  },
  {
    path:'',component:SearchComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'uploadfile',component:FileuploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
