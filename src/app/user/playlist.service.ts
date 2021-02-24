import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  playists = [
    {id:1, name:"erekle deisadze", img:"https://upload.wikimedia.org/wikipedia/ka/1/16/Erekle_deisadze.jpg"},
    {id:1, name:"Molchat doma", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjGdQs4jDArnSPBYs6IqR7CU4JnchVFfbOsA&usqp=CAU"},
    {id:1, name:"Kayakata", img:"https://i.ytimg.com/vi/C2hU7DXJ0gk/maxresdefault.jpg"},
    {id:1, name:"queen", img:"https://www.udiscovermusic.com/wp-content/uploads/2019/07/Queen-mid-70s-approved-photo-03-web-optimised-1000.jpg"}
  ];
  constructor() { }
  getAll(){
    return this.playists;
  }
}
