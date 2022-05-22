import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  redesList: any;

  constructor(private datosPorfolio: PorfolioService) { }
  
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.redesList = data.redes;
    })
  }

}
