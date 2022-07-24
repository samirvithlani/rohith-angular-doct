import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {MenuItem, PrimeIcons} from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserDetailComponent } from '../user-detail/user-detail.component';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private service:UserService,public dialogService:DialogService) { }
  ref: DynamicDialogRef;
  users:any;
  getUserDetail(id:number){

    this.ref = this.dialogService.open(UserDetailComponent, {
      header: 'USER DETAIL',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000,
      data:{id:id}
  });

  }

  delete(id:number){
    
    this.service.deleteUser(id).subscribe(res=>{
      if(res==1){
        alert("User Deleted Successfully");
        this.ngOnInit();
        
      }
      else{
        alert("User Not Deleted");
      }
    })
  }
  ngOnInit() {

    this.service.listUser().subscribe(res=>{

        this.users = res;
        console.log(this.users);
        
    })
  }

}
