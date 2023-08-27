import { Component } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { IAlumno } from '../alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {

  public listaAlumnos: IAlumno[] = [];

  constructor(public alumnosService: AlumnosService) {
    this.alumnosService.getAlumnos().subscribe(data => {
      this.listaAlumnos = data.data;
    });
  }

  public eliminar(alumno: IAlumno) {
    if (confirm(`¿Está seguro de eliminar el registro de "${alumno.nombre_completo}"?`)) {
      this.alumnosService.eliminarAlumno(<string>alumno._id).subscribe(data => {
        this.listaAlumnos = this.listaAlumnos.filter(al => al._id != alumno._id);
      });
    }
  }
}
