import { Injectable } from '@angular/core';
import { ITarea } from './tarea';
import { Firestore, collection, collectionData, deleteDoc, setDoc } from '@angular/fire/firestore';
import { addDoc, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private firestore: Firestore) { }

  public addTarea(tarea: ITarea) {
    let tarearef = collection(this.firestore, 'tareas');
    addDoc(tarearef, tarea);
  }

  getTareas(): Observable<ITarea[]> {
    let tarearef = collection(this.firestore, 'tareas');
    return collectionData(tarearef, { idField: 'id' }) as Observable<ITarea[]>
  }

  removeTarea(tar: ITarea) {
    let tarearef = doc(this.firestore, `tareas/${tar.id}`);
    return deleteDoc(tarearef)
  }
  updateTarea(tar: ITarea) {
    let tarearef = doc(this.firestore, `tareas/${tar.id}`);
    return setDoc(tarearef, tar);
  }

}
