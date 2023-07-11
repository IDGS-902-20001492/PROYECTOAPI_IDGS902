import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosUtl } from 'src/app/interfaces/utl';
import { ProyectoAPIService } from 'src/app/proyecto-api.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  regAlumno:AlumnosUtl={
    id:0,
    nombre:'',
    edad:0,
    correo:''
  }
  constructor(private alumnosutl:ProyectoAPIService, private router:Router){}
  
  //Funcion para poner los datos en el formulario
  ngOnInit(): void {
    const id = this.router.url.split('/')[2];

    this.alumnosutl.buscarAlumno(+id!).subscribe({
      next: (response: any)=>{
        this.regAlumno=response;
        console.log(response);
      },
      error:(e: any)=> console.error(e),
      complete:()=>console.info()})
  }

  editar(){
    console.log(this.regAlumno);
    this.alumnosutl.editarAlumno(this.regAlumno).subscribe({
      next:()=>console.log(),
      error:(e: any)=> console.error(e),
      complete:()=>console.info()})
 
      this.router.navigate(['verAlumnos'])
    }

}
