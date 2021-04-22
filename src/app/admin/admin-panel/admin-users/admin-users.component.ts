import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/Shared/Services/authenticate.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  loading=true;
  remainder=false;
  select=false;
  usersList=[];
  selectedUser:any;
  constructor(private authServ:AuthenticateService) { }

  ngOnInit(): void {

    this.getAllUsers();
  }
  getAllUsers(){
    this.authServ.getAllUsers().subscribe(
      data=>{
        this.usersList=data;
        this.loading=false;
        console.log("all users data: ",data[0]['firstName']);
      },
      err=>{
        console.log(err);    
      }
    )
  }
  showRemainder(){
    this.remainder=!this.remainder;
  }
  selectUser(user:any){
    this.selectedUser=user;
    console.log("select user: ", this.selectedUser);
    
    this.select=!this.select;
  }
}