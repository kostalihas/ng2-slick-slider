import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../food.interface';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  interpolation: ["{%", "%}"]
})
export class FoodComponent implements OnInit {
@Input() food : Food ;
  constructor() { }

  ngOnInit() {
  }

}
