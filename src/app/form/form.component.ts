import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { User } from '../models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  user: User = {
    name: '',
    age: 0,
    sex: '',
    describe: '',
    bloody: false,
    kawai: false,
    levelscary: 0,
    nocturnal: false,
    picture: '',
    repulsive: 0,
    vicious: false,
  };


  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getAll().subscribe((result) => { console.log(result); });
  }

  changeBloody() {
    this.user.bloody = true;
  }

  changeKawai() {
    this.user.kawai = true;
  }

  changeVicious() {
    this.user.vicious = true;
  }

  changeNocturnal() {
    this.user.nocturnal = true;
  }

  showBloody() {
    console.log(this.user);
  }

  createMonster() {
    this.user.picture = "blabla";
  }

  // sendMonster() {
  //   this.service.create()
  //     .subscribe();
  // }
}
