import { Component, OnInit } from '@angular/core';

interface CheckBox {
  text: string,
  color?: string,
  disabled?: boolean,
  checked?: boolean
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  public checkboxes: CheckBox[] = [
    {
      text: 'Jon Snow',
      checked: true
    },
    {
      text: 'Daenerys Targaryen',
      color: 'dark',
      checked: true
    },
    {
      text: 'Arya Stark',
      disabled: true
    },
    {
      text: 'Tyrion Lannister',
      color: 'secondary'
    },
    {
      text: 'Sansa Stark',
      color: 'danger',
      checked: true
    },
    {
      text: 'Khal Drogo',
    },
    {
      text: 'Cersei Lannister',
      color: 'tertiary',
      checked: true
    },
    {
      text: 'Stannis Baratheon',
      color: 'medium'
    },
    {
      text: 'Hondor',
      color: 'dark',
      checked: true
    },
    {
      text: 'Catelyn Stark',
      color: 'secondary',
      checked: true
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
