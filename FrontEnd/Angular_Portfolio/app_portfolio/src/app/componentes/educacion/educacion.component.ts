import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  admin: boolean = false;
  isLogin: boolean = false;
  educaciones: Array<Educacion> = [];
  constructor(public educacionService: EducacionService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getAthorities().includes("ROLE_ADMIN")) {
      this.admin = true;
    }
    if (this.tokenService.getToken()) {
      this.isLogin = true;
    }
    
  }

  cargarEducacion(): void{
    this.educacionService.getEducacion().subscribe(data => { this.educaciones = data })
  }
  delete(id?: number){
    if (id != undefined) {
      this.educacionService.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo borrar la Educacion");
        }
      )
    }
  }
}
