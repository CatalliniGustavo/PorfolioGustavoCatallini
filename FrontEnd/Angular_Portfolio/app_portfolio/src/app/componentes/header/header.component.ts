import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Redes } from 'src/app/model/redes';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { RedesService } from 'src/app/servicios/redes.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  redesList: Array<Redes>;

  constructor(private redesService: RedesService, private router:Router, private tokenService: TokenService) { }
  
  ngOnInit(): void {
    this.cargarRedes();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarRedes(): void {
    this.redesService.getRedes().subscribe(data => { this.redesList = data })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.redesService.delete(id).subscribe(
        data => {
          this.cargarRedes();
        }, err => {
          alert("No se pudo borrar la Red");
        }
      )
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

  register(){
    this.router.navigate(['/register'])
  }

}
