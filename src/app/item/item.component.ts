import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS1 } from '../item_list';
import { ITEMS2 } from '../item_list';
import { ITEMS3 } from '../item_list';
import { ITEMS4 } from '../item_list';
import { ITEMS5 } from '../item_list';
import { SONG1 } from '../item_list';
import { SONG2 } from '../item_list';
import { KEY_DUNGEON } from '../item_list';
import { REWARDS1 } from '../item_list';
import { REWARDS2 } from '../item_list';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items1 = ITEMS1
  items2 = ITEMS2
  items3 = ITEMS3
  items4 = ITEMS4
  items5 = ITEMS5
  song1 = SONG1
  song2 = SONG2
  rewards1 = REWARDS1
  rewards2 = REWARDS2
  key_dungeon = KEY_DUNGEON

  constructor() { }

  ngOnInit(): void {
  }

}
