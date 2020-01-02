import { Component, OnInit } from '@angular/core';

interface Chips {
  color: string,
  icon?: string
}

@Component({
  selector: 'app-chip',
  templateUrl: './chip.page.html',
  styleUrls: ['./chip.page.scss'],
})
export class ChipPage implements OnInit {

  public chips: Chips[] = [
    {
      color: 'primary',
      icon: 'pin'
    },
    {
      color: 'secondary',
      icon: 'wine'
    },
    {
      color: 'tertiary',
      icon: 'pizza'
    },
    {
      color: 'success',
      icon: 'beer'
    },
    {
      color: 'warning'
    },
    {
      color: 'danger'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
