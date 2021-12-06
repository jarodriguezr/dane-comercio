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
    private sessionService: SessionService
  ) { }

  getGeneral = (endPoint) => this.httpService.get(endPoint, this.sessionService.getHeaders())
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
