import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  triangle = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/TriangleArrow-Down.svg/532px-TriangleArrow-Down.svg.png";
  addicon = "https://www.nicepng.com/png/full/251-2519428_0-add-icon-white-png.png";
  addRoom = false;
  userEdit = false;
  closeicon = "https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/close-512.png";
  constructor() { }

  ngOnInit(): void {
  }

}
