import { Component, OnInit } from '@angular/core';
import  { AlumnosService } from '../servicios/alumnos.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {


  user : FormGroup;
  

  constructor( private router : Router,
               private alumnos : AlumnosService 
    ) { }

  ngOnInit(): void {
    
  }

  
  nombre: any;
  apellido: any;
  nickname: any;
  email: any;
  passw: any;

  ingresar(){
    let  data = {
    "usuario" : {
      "nombre": this.nombre,
      "apellido": this.apellido,
      "nickname" : this.nickname,
      "email": this.email,
      "passw" :  this.passw
    }
    }
    this.alumnos.crear(data).subscribe(
      response => {
        console.log("ok")
      }
    ), error => {
      console.log(error)
    }
   
    
  }   
  


}
