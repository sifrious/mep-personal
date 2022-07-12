import { Component, OnInit } from '@angular/core';
import { making_items, MakingItem } from '../making';

@Component({
  selector: 'app-making',
  templateUrl: './making.component.html',
  styleUrls: ['./making.component.css']
})

export class MakingComponent implements OnInit {
  formatList(making_items:Array<MakingItem>) {
    var list_string:String = '';
    for (let item of making_items) {
      list_string += item.name + ", ";
    }
    return list_string.slice(0, -2);
  }

  making_string = this.formatList(making_items);

  making_items = making_items;

  constructor() { }

  ngOnInit(): void {
  }

}
