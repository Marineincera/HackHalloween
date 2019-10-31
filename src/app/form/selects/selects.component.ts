import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss'],
})
export class SelectsComponent implements OnInit {
  @Output()
  addBloody = new EventEmitter<any>();
  @Output()
  addKawai = new EventEmitter<any>();
  @Output()
  addNocturnal = new EventEmitter<any>();
  @Output()
  addVicious = new EventEmitter<any>();

  bloody: boolean;
  kawai: boolean;
  nocturnal: boolean;
  vicious: boolean;




  constructor() { }

  ngOnInit() {
  }

  sendTendance() {
    if (this.bloody === true) {
      this.addBloody.emit(this.bloody);
    }
    if (this.kawai === true) {
      this.addKawai.emit(this.kawai);
    }
    if (this.vicious === true) {
      this.addVicious.emit(this.vicious);
    }
    if (this.nocturnal === true) {
      this.addNocturnal.emit(this.nocturnal);
    }

    console.log(this.bloody);
  }

}


