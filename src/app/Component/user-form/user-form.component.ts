import { Component, OnInit } from '@angular/core';
import User from 'src/app/entity/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = new User();

  users: User[] = [];

  title="fill all the fields below"
  
   
  save(){
   const observable= this.userService.createuser(this.user);
   observable.subscribe(
     (response:any)=> {
        console.log(response);
     },
     function(error){
          alert("Something wrong!")
     }
     )
   
  }

  deleteRow(user,index){
    const observable = this.userService.deleteUser(user);
    observable.subscribe((response:any)=>{
      console.log(response);
      this.users.splice(index,1)
    })
  }

  sort(){
    this.users.sort(function(user1,user2){
      return user1.age - user2.age
    })
  }

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    const promise = this.userService.getUsers();
    promise.subscribe((response)=>{
      console.log(response);
      this.users = response as User[];
    })
  }

}
