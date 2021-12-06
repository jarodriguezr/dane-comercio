
import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session/services/session/session.service';

@Component({
  selector: 'app-general-layout',
  templateUrl: './general-layout.component.html',
  styleUrls: ['./general-layout.component.scss']
})
export class GeneralLayoutComponent implements OnInit {

  navbarCollapsed = true;

  menu:any[] = [
    {
      nombre: 'Home',
      slug: 'home',
      ruta: '/',
      icono: 'fas fa-fw fa-chart-area'
    },
    {
      nombre: 'Económico',
      slug: 'noticias',
      ruta: '/economico',
      icono: 'fas fa-fw fa-chart-area'
    }
  ];

  constructor(
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
  }

  public logout(): void{
    this.sessionService.logout();
    /*.subscribe(
        response => {if(response) {this.storageService.logout();}}
    );*/
  }
}
