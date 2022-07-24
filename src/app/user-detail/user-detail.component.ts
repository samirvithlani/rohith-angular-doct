import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(public ref:DynamicDialogRef,public config:DynamicDialogConfig,private service:UserService) { }

  user:any;
  ngOnInit() {
    this.service.getUserById(this.config.data.id).subscribe(res=>{
      console.log(this.config.data.id);
      this.user = res;
      console.log(this.user);
    })
  }

}
