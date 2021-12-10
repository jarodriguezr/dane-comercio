import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionService } from 'src/app/session/services/session/session.service';
import { HttpService } from 'src/app/shared/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class EconomicoService {

  private filtroForm = new Subject<any>();
  public filtroForm$ = this.filtroForm.asObservable();

  constructor(
    private httpService: HttpService,
    private sessionService: SessionService
  ) { }


  reporValue = (data) => this.filtroForm.next(data);

  getModulos(){
    return this.httpService.get('dane/api/v1/formularioCenso/idEnc/1', this.sessionService.getHeaders())
    .pipe(map( (resp: any) => {
      resp[0].modulos.forEach((element,index) => { 
        
        element.tabDisabled = index === 0 ? false : true ;
         
         const groupModuleForm: any = {};
         const groupModulePreg: any = [];
         
         element.secciones.forEach(elementSecciones => {
            
           const groupSeccionPreg: any = [];
 
           elementSecciones.preguntas.forEach(preg => {
              preg.disabled = true;
            // console.log(preg);
            
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
     }));;
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
}
