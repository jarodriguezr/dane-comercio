import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SessionService } from 'src/app/session/services/session/session.service';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ParametricasService {

  constructor(
    private http: HttpService,
    private httpService: HttpService,
    private sessionService: SessionService
  ) { }

  
  getdpto = this.http.loadJsonTemp('assets/json/dpto.json');
  getmpio = this.http.loadJsonTemp('assets/json/mpio.json');
  
  
  getGeneral = (endPoint) => this.http.get(endPoint, this.sessionService.getHeaders())
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
