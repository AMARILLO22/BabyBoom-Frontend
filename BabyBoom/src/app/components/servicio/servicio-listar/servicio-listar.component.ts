import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServicioService } from 'src/app/service/servicio.service';
import {  Servicio } from 'src/app/model/Servicio'
import { MatDialog } from '@angular/material/dialog'
import { ServicioDialogoComponent } from './servicio-dialogo/servicio-dialogo.component';

@Component({
  selector: 'app-servicio-listar',
  templateUrl: './servicio-listar.component.html',
  styleUrls: ['./servicio-listar.component.css']
})
export class ServicioListarComponent implements OnInit{
lista:Servicio[]=[];
dataSource:MatTableDataSource<Servicio> = new MatTableDataSource();
displayedColumns:string[] = ['id', 'nombreservicio','acciones']
private idMayor: number = 0;
  constructor(private Ss:ServicioService,private dialog: MatDialog){

  }
  ngOnInit(): void {
      this.Ss.list().subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
      })
      this.Ss.getLista().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });
      this.Ss.getConfirmaEliminacion().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ServicioDialogoComponent);
  }
  eliminar(id: number) {
    this.Ss.eliminar(id).subscribe(() => {
      this.Ss.list().subscribe(data => {
        this.Ss.setList(data);/* se ejecuta la línea 27 */
      });
    });
  }
}
