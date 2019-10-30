import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-photo-select',
  templateUrl: './photo-select.component.html',
  styleUrls: ['./photo-select.component.scss']
})
export class PhotoSelectComponent implements OnInit {
  users: [];
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
      console.log(this.users);
    });
  }

  // addPhoto() {
  //   this.sendAvatar.emit(this.userPicture);
  // }
}
