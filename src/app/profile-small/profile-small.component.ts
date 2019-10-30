import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-small',
  templateUrl: './profile-small.component.html',
  styleUrls: ['./profile-small.component.scss']
})
export class ProfileSmallComponent implements OnInit {
  user;
  constructor(private service: UserService) { }

  ngOnInit() {
  }
}
