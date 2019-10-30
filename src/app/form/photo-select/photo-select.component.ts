import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-photo-select',
  templateUrl: './photo-select.component.html',
  styleUrls: ['./photo-select.component.scss']
})
export class PhotoSelectComponent implements OnInit {
  users: [];
  user: User = new User();
  userPicture = '';
  id;
  @Output()
  sendAvatar = new EventEmitter<any>();
  constructor(private service: UserService) { }

  ngOnInit() {
    // const id = 1;
    // this.service.getPhotoById(id).subscribe((user) => {
    //   this.picture = user.picture;
    // });
    this.service.getAll().subscribe((users) => {
      this.users = users;
      console.log(this.user);
    });
  }

  sendPhoto() {
    this.id = this.userPicture + 1;
    this.service.getPhotoById(this.id).subscribe((user) => {
      this.userPicture = user.picture;
      console.log(this.userPicture);
    });
  }

  addPhoto() {
    this.sendAvatar.emit(this.userPicture);
  }
}
