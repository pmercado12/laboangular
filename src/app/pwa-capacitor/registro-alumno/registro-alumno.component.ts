import { Component, inject } from '@angular/core';
import { IAlumno } from '../alumno.model';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css']
})
export class RegistroAlumnoComponent {
  imageUrl: any;
  isButtonDisabled: boolean = false;
  _alumno: IAlumno;
  private http = inject(HttpClient);
  constructor() {
    this._alumno = { nombre_completo: '', doc_identidad: '', imagen: '' };
  }
  async takePicture() {
    console.log(21);
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 90
    });
    this.imageUrl = image.webPath;
  }
}
