import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ServiceAdm } from 'src/app/services/service-adm.service';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil-usuario-datos',
  templateUrl: './perfil-usuario-datos.component.html',
  styleUrls: ['./perfil-usuario-datos.component.css']
})
export class PerfilUsuarioDatosComponent implements OnInit {
  usuarioSeleccionado: User={idUsuario:0,nombre:"...",apellido:"...",email:"example@xyz.com",contraseña:""};
  id!: any;
  password!:any;

  constructor(private service:UsuarioService) {
    
  }

  ngOnInit(): void {
    this.buscarUsuarioPorID(2);
  }
  buscarUsuarioPorID(id:any){
    console.log("El usuario ha buscar es:"+id);
    this.service.getUsuarios(2).subscribe(data=>{
      console.log(data);
      if(data===null || data===undefined || typeof data === 'undefined'){
        this.id="...";
        this.usuarioSeleccionado = {
          idUsuario:undefined,
          nombre:"",
          apellido:"",
          email:"",
          contraseña:""
        };
      }else{
        this.usuarioSeleccionado=data;
        this.password=data.contraseña;
        this.id = this.usuarioSeleccionado.idUsuario;
      }
    })
  }
  actualizarDatosUsuario(){
    console.log("Actualizar usuario");
    this.usuarioSeleccionado.contraseña=this.password;
    this.service.actualizarDatosUsuario(this.usuarioSeleccionado).subscribe(data=>{

    });

  }
}
