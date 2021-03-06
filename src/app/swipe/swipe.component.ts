import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss']
})
export class SwipeComponent implements OnInit {
  public users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    const id = 2;
    this.userService.getById(id).subscribe((users) => {
      this.users = users;
      console.log(this.users);
  });

}
}
