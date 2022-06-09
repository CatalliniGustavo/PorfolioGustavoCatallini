import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/usuario.model';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.css']
})
export class CardPerfilComponent implements OnInit {
  usuario: usuario = new usuario("","","","","");
 
  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    
    this.usuarioService.getUsuario().subscribe(data => {this.usuario = data})
   
  }

}
