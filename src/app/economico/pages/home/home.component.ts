import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../shared/services/http/http.service';
import { EconomicoService } from '../../services/economico/economico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  dataForm: any;
  currentItem:any;
  preload: boolean = true;
  tabActivo = 0;

  constructor(
    private http: HttpService,
    private economicoService: EconomicoService
  ) { }

  ngOnInit(): void {
    this.http.loadDataJsonTemp('assets/json/validaciones.json').subscribe( (data:any) => {
      this.dataForm = data;
      this.currentItem = this.dataForm?.modulos[0];
      this.preload = false;
    });
    // this.preload = true;
    // this.economicoService.getModulos().subscribe( (resp:any) => {      
    //    this.dataForm = resp;
    //    this.currentItem = this.dataForm?.modulos[0];
    //    this.preload = false;
   // });


    this.economicoService.filtroForm$.subscribe( data => {
      
      console.log(data)
      
      const item = this.dataForm?.modulos.findIndex( x => x.idModulo === data.idModulo);
      this.tabActivo  = item+1;
      // // console.log(item);

      // // this.dataForm.modulos.forEach(element => {
      // //   element.tabActive = false;
      // //   element.showTab = false;
      // // });
      // // this.dataForm.modulos[item].tabActive = false;
      // this.dataForm.modulos[item].showTab = false;

      this.dataForm.modulos[item+1].tabDisabled = false;
      // this.dataForm.modulos[item+1].showTab = true;
      // this.currentItem = this.dataForm.modulos[item+1];
      
    });
  }

  showTab(item){ 
    if(this.currentItem.idModulo !== item.idModulo){
      if(!this.currentItem?.groupModuleForm.invalid){
        this.currentItem = item;
        this.dataForm.modulos.forEach(element => {
          element.showTab = false;
        });
        item.showTab = true;
      } else {

      }
    } else {
      // console.log('no hace nada');
      
    } 
  }

}
