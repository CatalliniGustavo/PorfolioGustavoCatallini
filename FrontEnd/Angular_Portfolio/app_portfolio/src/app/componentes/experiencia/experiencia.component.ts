import { Component, OnInit } from '@angular/core';
import { NavigationError, NavigationExtras, Router } from '@angular/router';
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
  experiencias: Array<Experiencia> = [];
  constructor(public experienciaService: ExperienciaService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getAthorities().includes("ROLE_ADMIN")) {
      this.admin = true;
    }
    if (this.tokenService.getToken()) {
      this.isLogin = true;
    }
    
  }

  cargarExperiencia(): void{
    this.experienciaService.getExperiencia().subscribe(data => { this.experiencias = data })
  }
  delete(id?: number){
    if (id != undefined) {
      this.experienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
