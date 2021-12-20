import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SessionService } from 'src/app/session/services/session/session.service';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ParametricasService {


  constructor(
    private httpService: HttpService,
    private sessionService: SessionService,
    private http: HttpClient
  ) { }

  getGeneral = (endPoint) => this.http.get(endPoint)
                                              .pipe(map( (m:any) => {
                                                  m.forEach(element => {
                                                    element.descripcionRespuesta = element.descripcion;
                                                  });

                                                  m.unshift({
                                                    idParametro: '',
                                                    descripcionRespuesta: "Seleccionar",
                                                  });
                                                return m ;
                                              }));



public getGeneralLocal(endPoint: string){
  return this.http.get(endPoint)
  .pipe(map( (m:any) => {
   m.forEach(element => {
        element.descripcionRespuesta = element.descripcion;
      });

      m.unshift({
        idParametro: '',
        descripcionRespuesta: "Seleccionar",
      });
    return m ;
  }));

}

}
