import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

usuario: usuario = new usuario("","","","","");

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {

    this.usuarioService.getUsuario().subscribe(data => {this.usuario = data})
  }

}
