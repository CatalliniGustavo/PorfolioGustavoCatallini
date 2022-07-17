import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hblandas } from 'src/app/model/hblandas';
import { Hduras } from 'src/app/model/hduras';
import { HblandasService } from 'src/app/servicios/hblandas.service';
import { HdurasService } from 'src/app/servicios/hduras.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  admin: boolean = false;
  isLogin: boolean = false;
  hblandasl: Array<Hblandas> = [];
  hdurasl: Array<Hduras> = [];
  constructor(
    public hblandasService: HblandasService,
    public hdurasService: HdurasService,
    private tokenService: TokenService,
    private router: Router) { }

  ngOnInit(): void {
    this.cargarHblandas();
    this.cargarHduras();
    if (this.tokenService.getAthorities().includes("ROLE_ADMIN")) {
      this.admin = true;
    }
    if (this.tokenService.getToken()) {
      this.isLogin = true;
    }

  }

  cargarHblandas(): void {
    this.hblandasService.getHblandas().subscribe(data => { this.hblandasl = data })
  }
  cargarHduras(): void {
    this.hdurasService.getHduras().subscribe(data => { this.hdurasl = data })
  }

  deleteHb(id?: number) {
    if (id != undefined) {
      this.hblandasService.delete(id).subscribe(
        data => {
          this.cargarHblandas();
        }, err => {
          alert("No se pudo borrar la Hblandas");
        }
      )
    }
  }
  deleteHd(id?: number) {
    if (id != undefined) {
      this.hdurasService.delete(id).subscribe(
        data => {
          this.cargarHduras();
        }, err => {
          alert("No se pudo borrar la Hduras");
        }
      )
    }
  }
}
