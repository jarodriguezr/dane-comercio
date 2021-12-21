import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EconomicoService } from '../../services/economico/economico.service';

@Component({
  selector: 'app-modulo-economico',
  templateUrl: './modulo-economico.component.html',
  styleUrls: ['./modulo-economico.component.scss']
})
export class ModuloEconomicoComponent implements OnInit, OnDestroy {

  @Input() dataModule:any;

  public destroy$: Subject<boolean> = new Subject<boolean>();
  formulario: FormGroup;

  constructor(
    private economicoService : EconomicoService 
  ) { }

  ngOnInit(): void {  

    if(this.dataModule.secciones.length === 0){
      this.dataModule.tabActive = false;
    }
              
    this.formulario = this.dataModule.groupModuleForm;
   // alert('groupModuleForm :'+JSON.stringify(this.formulario));
    this.formulario.statusChanges                   
    .pipe(takeUntil(this.destroy$))
    .subscribe( status => {      
      if(status === 'INVALID'){
        // console.clear();
        //alert('invalido');
        // console.log(this.formulario.getRawValue());        
      } else {

      }
    }); 
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  public submit() {    
    // console.log(this.formulario.controls);
    // temporal borrar
    for (const key in this.formulario.controls) {
      if (Object.prototype.hasOwnProperty.call(this.formulario.controls, key)) {

        const element = this.formulario.controls[key];
        if(element.status === "INVALID"){
          console.log(key);
          console.log(element.errors);
        }
        

      }
    }
    
    if (this.formulario.invalid) {      
      this.formulario.markAllAsTouched();
    } else {
      this.economicoService.reporValue(this.dataModule);
       // Servicio para enviar la data por cada pestaña     
    }
  }

}
