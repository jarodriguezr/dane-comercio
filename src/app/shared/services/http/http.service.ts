import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

const SERVER = environment.server;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  get<T>( endPoint: string,  headers?: HttpHeaders , params?: HttpParams, ) { 
    return this.http.get<T>(`${SERVER.url}/${endPoint}`, { params , headers});
  }

  post<T>( endPoint: string, data?: any , headers?: HttpHeaders) {    
    return this.http.post<T>(`${SERVER.url}/${endPoint}`, data, { headers });
  }


  public loadDataJsonTemp(pathJson: string){
    debugger
    return this.http.get(pathJson)
    .pipe(map( (resp: any) => {
      debugger
      resp.forEach((element,index) => { 
      debugger
       if(index == 0){
        element.tabActive = true;
        element.showTab = true
       } else {
        element.tabActive = false;
        element.showTab = false
       }
        const groupModuleForm: any = {};
        const groupModulePreg: any = [];        
        element.modulos.forEach((seccion)=> {
          
          const groupSeccionPreg: any = [];
          seccion.secciones.forEach(preg => {
              preg.preguntas.forEach(pregunta => {
                pregunta.formName = pregunta.variable;
                groupSeccionPreg.push(pregunta);            
                const validaciones:any[] = this.crearValidaciones(pregunta.validaciones);
                groupModuleForm[pregunta.variable] = new FormControl('' ,[...validaciones]);
              
              });
            groupModulePreg.push(groupSeccionPreg);            
          });
        element.groupModulePreg = groupModulePreg;
        element.groupModuleForm = new FormGroup(groupModuleForm);
        });
        })
        debugger
        console.log(resp[0]);
        return resp[0];
    }))
  }

  private crearValidaciones(data:any): any[] {
    const temp:any[] = [];

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const element = data[key];
        // console.log(element, key);
        switch (key) {
          case 'requerido':
            const cosa = Validators.required;
            temp.push(cosa )
            break;
        
          default:
            break;
        }
      }
   }
    
    return temp;
  }

  public loadJsonTemp(pathJson: string){
    return this.http.get(pathJson)
    .pipe(map( (resp: any) => {
      return resp;
      
    }));
  }
}
