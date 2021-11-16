import { Component, OnInit } from '@angular/core';
import { Skull_Total } from '../skull_list';
import { Skull_total } from '../skull';

@Component({
  selector: 'app-golden-skulltula',
  templateUrl: './golden-skulltula.component.html',
  styleUrls: ['./golden-skulltula.component.css']
})
export class GoldenSkulltulaComponent implements OnInit {
  Skull_Total = Skull_Total
  constructor() { }

  ngOnInit(): void {
  }

}
