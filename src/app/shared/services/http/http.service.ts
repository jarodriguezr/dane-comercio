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
    alert(pathJson);
    return this.http.get(pathJson)
    .pipe(map( (resp: any) => {
      alert('llega modulos');
      alert(JSON.stringify(resp));
      var funcs = [1, 2].forEach( (i) => alert("hola") )
     
      resp[0].modulos.forEach((element,index) => { 
      

       if(index == 0){
        element.tabActive = true;
        element.showTab = true
       } else {
        element.tabActive = false;
        element.showTab = false
       }      
        
        const groupModuleForm: any = {};
        const groupModulePreg: any = [];
        
        element.secciones.forEach(elementSecciones => {

          const groupSeccionPreg: any = [];

          elementSecciones.preguntas.forEach(preg => {
            preg.formName = preg.variable;
            groupSeccionPreg.push(preg);            
            const validaciones:any[] = this.crearValidaciones(preg.validaciones);                        
            
            groupModuleForm[preg.variable] = new FormControl('' ,[...validaciones]);
          });
          groupModulePreg.push(groupSeccionPreg);

        });
        element.groupModulePreg = groupModulePreg;
        element.groupModuleForm = new FormGroup(groupModuleForm);
      });
      
      
      return resp[0];
    }));
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
