import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  admin: boolean = false;
  isLogin: boolean = false;
  experienciaList: any;
  experiencias: Array<Experiencia> = [];
  constructor(public experienciaService: ExperienciaService,private datosPorfolio: PorfolioService, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getAthorities().includes("ROLE_ADMIN")) {
      this.admin = true;
    }
    if (this.tokenService.getToken()) {
      this.isLogin = true;
    }
    this.experienciaService.getExperiencia().subscribe(data => {this.experiencias = data})
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.experienciaList = data.experiencia;
    });
  }
}
