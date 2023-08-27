import { Component, inject } from '@angular/core';
import { IAlumno } from '../alumno.model';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';
import { AlumnosService } from '../alumnos.service';

@Component({
    selector: 'app-registro-alumno',
    templateUrl: './registro-alumno.component.html',
    styleUrls: ['./registro-alumno.component.css']
})
export class RegistroAlumnoComponent {
    imageUrl: any;
    isButtonDisabled: boolean = false;
    _alumno: IAlumno;

    constructor(private router: Router, public alumnosService: AlumnosService) {
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

    async startUpload(file: { name: string, data: string }) {
        const response = await fetch(file.data);
        const blob = await response.blob();

        const formData = new FormData();
        formData.append('file', blob, file.name);
        formData.append('nombre_completo', this._alumno.nombre_completo);
        formData.append('doc_identidad', this._alumno.doc_identidad);
        this.uploadData(formData);
    }

    public uploadData(formData: FormData) {
        this.alumnosService.crearAlumno(formData).subscribe(data => {
            this.router.navigate(['pwa-capacitor', 'lista-alumnos']);
        });
    }

    registrarAlumno() {
        this.startUpload({ name: `${this._alumno.doc_identidad}.jpeg`, data: this.imageUrl });
    }


}
