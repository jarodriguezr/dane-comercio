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
    return this.http.get(pathJson)
    .pipe(map( (resp: any) => {
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

          //  alert("groupModulePreg: "+JSON.stringify(groupModulePreg
          //    ));
        });
        element.groupModulePreg = groupModulePreg;
        element.groupModuleForm = new FormGroup(groupModuleForm);
      });
      
     // alert("resp[0]: "+JSON.stringify(resp[0]))
      return resp[0];
    }));
  }

  private crearValidaciones(data:any): any[] {
    const temp:any[] = [];

    for (const key in data) {
      //alert("data:"+JSON.stringify(data))
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const element = data[key];                
        
        let validacion = null;
        switch (key) {
          case 'requerido':
            validacion = Validators.required;            
            temp.push(validacion);
            break;
          case 'max':
            if(element.value && element.value != 0){
              validacion = Validators.maxLength(element.value);
              temp.push(validacion);
            }              
            break;
          case 'min':
            if(element.value && element.value != 0){
              validacion = Validators.minLength(element.value);            
              temp.push(validacion);
            }
            break;
           case 'pattern':
             if(element.value && element.value != 0){
               validacion = Validators.pattern(element.value);            
               temp.push(validacion);
             }

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
