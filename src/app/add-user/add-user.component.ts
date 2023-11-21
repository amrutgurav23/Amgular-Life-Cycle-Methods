import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userName: string = '';
  @Output() userAdded = new EventEmitter<string>();
  onUserAdded(){
    this.userAdded.emit(this.userName);
  }
}
