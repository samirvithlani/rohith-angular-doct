import { Component, DoCheck, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck {

  

  user:any;
  ngDoCheck(): void {
    this.user ={
      id:localStorage.getItem('id'),
      name:localStorage.getItem('name'),
      email:localStorage.getItem('email')
    }
    console.log("user....",this.user);
  }
  
  constructor(private messageService:MessageService) { }
  addSingle() {
    this.messageService.add({severity:'error', summary:'Service Message', detail:'Via MessageService'});
}
clear() {
  this.messageService.clear();
}
  logout(){

    localStorage.clear();
    this.messageService.add({severity:'error', summary: 'sucess', detail: 'User loggedout successfully'});


  }

  ngOnInit() {
  }

}
