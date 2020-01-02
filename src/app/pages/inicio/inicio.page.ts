import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string,
  name: string,
  redirectTo: string,
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Componente[] = [
    {
      icon: 'key',
      name: 'login',
      redirectTo: '/login'
    },
    {
      icon: 'american-football',
      name: 'action-sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert',
      name: 'alert',
      redirectTo: '/alert'
    },
    {
      icon: 'contact',
      name: 'avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'albums',
      name: 'badge',
      redirectTo: '/badge'
    },
    {
      icon: 'power',
      name: 'botones',
      redirectTo: '/botones'
    },
    {
      icon: 'browsers',
      name: 'card',
      redirectTo: '/card'
    },
    {
      icon: 'checkbox',
      name: 'checkbox',
      redirectTo: '/checkbox'
    },
    {
      icon: 'link',
      name: 'chip',
      redirectTo: '/chip'
    },
    {
      icon: 'calendar',
      name: 'date-time',
      redirectTo: '/date-time'
    },
    {
      icon: 'copy',
      name: 'fab',
      redirectTo: '/fab'
    },
    {
      icon: 'code',
      name: 'api-rest',
      redirectTo: '/api-rest'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

