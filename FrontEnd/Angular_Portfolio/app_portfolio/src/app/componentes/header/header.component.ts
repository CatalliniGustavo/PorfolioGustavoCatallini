import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  redesList: any;

  constructor(private datosPorfolio: PorfolioService, private router:Router) { }
  
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.redesList = data.redes;
    })
  }

  login(){
    this.router.navigate(['/login'])
  }

}
