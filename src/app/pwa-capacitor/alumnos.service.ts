import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlumnosService {

    private url = "https://codigoinfo.xyz/api/alumnos";

    constructor(public http: HttpClient) { }

    public crearAlumno(formData: FormData): Observable<any> {
        return this.http.post(this.url + "/registro", formData);
    }

    public getAlumnos(): Observable<any> {
        return this.http.get(this.url);
    }

    public eliminarAlumno(id: string): Observable<any> {
        return this.http.delete(this.url + `/${id}`);
    }
}
