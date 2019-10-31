import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSelectComponent } from './photo-select.component';

describe('PhotoSelectComponent', () => {
  let component: PhotoSelectComponent;
  let fixture: ComponentFixture<PhotoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
