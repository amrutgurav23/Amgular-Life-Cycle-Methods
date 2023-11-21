import { Component, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent {
   usersList: any = ["Amrut"];
   name = 'Life Cycle Method Understanding';
  
   OnNameChangeClick(){
    this.name = 'OnChanges Life cycle Method executed';
   }

   OnDeleteComponent(){
    this.usersList = [];
   }
  onUserAdded(event: string){
    this.usersList.push(event);
  }
}
