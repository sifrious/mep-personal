import { Component, OnInit } from '@angular/core';
import { doing_items } from '../doing';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent implements OnInit {
  doing_items = doing_items;

  constructor() { }

  ngOnInit(): void {
  }

}
