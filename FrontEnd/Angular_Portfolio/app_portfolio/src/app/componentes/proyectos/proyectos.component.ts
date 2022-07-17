import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  admin: boolean = false;
  isLogin: boolean = false;
  proyectosl: Array<Proyectos> = [];
  constructor(public proyectosService: ProyectosService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getAthorities().includes("ROLE_ADMIN")) {
      this.admin = true;
    }
    if (this.tokenService.getToken()) {
      this.isLogin = true;
    }

  }

  cargarProyectos(): void {
    this.proyectosService.getProyectos().subscribe(data => { this.proyectosl = data })
  }
  delete(id?: number) {
    if (id != undefined) {
      this.proyectosService.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        }, err => {
          alert("No se pudo borrar la Proyectos");
        }
      )
    }
  }
}

