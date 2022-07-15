import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  imgIcono: string = '';
  linkIcono: string = '';
  nombre: string = '';
  fechainicio: string = '';
  fechafin: string = '';
  lugar: string = '';
  titulo: string = '';
  descripcion: string = '';
  constructor(
    private experienciaService: ExperienciaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(
      this.imgIcono,
      this.linkIcono,
      this.nombre,
      this.fechainicio,
      this.fechafin,
      this.lugar,
      this.titulo,
      this.descripcion);
    this.experienciaService.save(expe).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Falla en el intento de cargar la nueva experiencia");
      this.router.navigate(['']);
    }
    );

  }

}
