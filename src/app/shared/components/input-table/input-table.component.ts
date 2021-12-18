import { Component, Inject, Input, ViewChild } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


import { TableService } from './table.service';
import { FormGroup } from '@angular/forms';
import { __asyncDelegator } from 'tslib';

@Component({
  selector: 'app-input-table',
  templateUrl: './input-table.component.html',
  styleUrls: ['./input-table.component.scss']
})
export class InputTableComponent {

  
  @Input() form: FormGroup;
  @Input() pregunta: any;
  
  public displayedColumns: string[] ;
  public data: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private tableService: TableService) {
  }

  ngOnInit() {
    this.displayedColumns=  this.transformarColumnas(this.pregunta?.columnas);
    this.loadData();
  
  }

  private transformarColumnas(columnas:any[]):any[]{
    const columnasTransformadas: any= [];    
    columnas.forEach(col => {
      columnasTransformadas.push(col.nombre);
    });
    return columnasTransformadas;
  }

  loadData() {
    this.tableService.getData(
      this.pregunta?.fuenteDatos)
       .subscribe(result => {
         this.data = new MatTableDataSource<any>(result.data);        
       }, error => console.error(error));
  }

 
}
