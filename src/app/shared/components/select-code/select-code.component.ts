import { Component, DebugElement, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ParametricasService } from '../../services/parametricas/parametricas.service';

@Component({
  selector: 'app-select-code',
  templateUrl: './select-code.component.html',
  styleUrls: ['./select-code.component.scss']
})
export class SelectCodeComponent implements OnInit , OnDestroy {

  @Input() formulario: FormGroup;
  @Input() pregunta: any;
  @Input() selectedText: any;
  public destroy$: Subject<boolean> = new Subject<boolean>();

  value: string;
  isDisabled: boolean;
  isHidden: boolean = false;
  
  constructor(
    private parametricasService: ParametricasService ,
  ) { }

  
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.pregunta.descripcionPregunta = this.pregunta.descripcionPregunta == null ?  '' : this.pregunta.descripcionPregunta.trim();
      console.log(this.pregunta);


    if(this.pregunta?.depende && this.pregunta?.depende.length !== 0){  

        this.pregunta.depende.forEach(element => {
          
          if(element.tipo === "SELECT"){
            
            this.formulario.get(element.campo).valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe( async (selectedValue:any) => {
              console.log(this.pregunta.selectInvocar.url + selectedValue);  
              debugger
              await  this.parametricasService.getGeneral(this.pregunta.selectInvocar.url + selectedValue).subscribe( (resp:any[]) => {
                this.pregunta.opcionesRespuesta = resp;
              } );
            }); 
          }

          if(element.tipo === "VALOR"){
            this.isHidden = true;
            this.formulario.controls[this.pregunta.formName].disable();
            
            this.formulario.get(element.campo).valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe( async (selectedValue:any) => {
              console.log(selectedValue);
              
              if(selectedValue === element.valor){
                this.isHidden = false;
                this.formulario.controls[this.pregunta.formName].enable();
              } else {
                this.isHidden = true;
                this.formulario.controls[this.pregunta.formName].disable();
              }
            }); 
          }
          
        });

        // obtener datos para carga de componente select 
              
      }else { 
        debugger   
        
        if(this.pregunta?.validaciones?.selectInvocar?.url){
          debugger
          if(this.pregunta?.variable=='MPIO'){
            this.parametricasService.getmpio.subscribe( (resp:any) => {
              debugger
              this.pregunta.opcionesRespuesta = resp
              this.pregunta.opcionesRespuesta.unshift({
                codigo:null,
                nombre: "Seleccionar",
              });
            } );
          }
          if(this.pregunta?.variable=='DPTO'){
            this.parametricasService.getdpto.subscribe( (resp:any) => {
              debugger
              this.pregunta.opcionesRespuesta = resp
              this.pregunta.opcionesRespuesta.unshift({
                codigo:null,
                nombre: "Seleccionar",
              });
            } );
          }
         
                
        } else {
          this.pregunta.opcionesRespuesta.unshift({
            idParametro: '',
            descripcionRespuesta: "Seleccionar",
          });
        }
    }     
    
  }

}
