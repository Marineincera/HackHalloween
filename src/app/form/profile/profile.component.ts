import { User } from '../../models/user';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public users: User;


  constructor(private userService: UserService) { }

  ngOnInit() {
    const id = 22;
    this.userService.getById(id).subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });

  }
  goTo() {

  }

}
