import { Soportetecnico } from "./Soportetecnico";

  export class Problema{
  soportetecnico:Soportetecnico=new Soportetecnico();
  apoderado:Apoderado=new Apoderado();
  Titulo: string=""
  Descripcion: string=""
  FechaInicio:Date=new Date(Date.now())
  FechaFin:Date=new Date(Date.now())
}

