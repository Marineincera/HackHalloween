import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getAll().subscribe((result) => { console.log(result); });

  }

}
