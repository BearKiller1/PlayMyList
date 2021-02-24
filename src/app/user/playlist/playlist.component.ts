import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  triangle = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/TriangleArrow-Down.svg/532px-TriangleArrow-Down.svg.png";
  addicon = "https://www.nicepng.com/png/full/251-2519428_0-add-icon-white-png.png";
  addPlaylist = false;
  closeicon = "https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/close-512.png";
  data:any;
  userEdit = false;
  constructor(private Obj:PlaylistService) { }

  ngOnInit(): void {
    this.data = this.Obj.getAll();
  }

}
