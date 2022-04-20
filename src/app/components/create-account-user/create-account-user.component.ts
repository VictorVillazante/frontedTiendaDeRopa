import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
/*import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { LoginUsuario } from 'src/app/models/login-usuario';*/
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-account-user',
  templateUrl: './create-account-user.component.html',
  styleUrls: ['./create-account-user.component.css']
})
export class CreateAccountUserComponent implements OnInit {
 /* loginUsuario!: LoginUsuario;
  nombreUsuario = '';
  password = '';*/
  usuarioNuevo:Usuario={id_usuario:null,nombre:"",apellido:"",email:"",password:""};
  isLogged = false;

  constructor(
   /* private authService: AuthService,
    private tokenService: TokenService,*/
    private router: Router
  ) { }

  ngOnInit() {
    this.testLogged();
  }

  /*ionViewWillEnter() {
    this.testLogged();
    this.vaciar();
  }


  onLogin() {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.isLogged = true;
        this.router.navigate(['/']);
      },
      err => {
        console.log(err.error.message);
      }
    );
  }

  vaciar() {
    this.nombreUsuario = '';
    this.password = '';
  }

 

  logOut(): void {
    this.tokenService.logOut();
    this.isLogged = false;
    this.vaciar();
  }

  testLogged(): void {
    this.isLogged = this.tokenService.getToken() != null;
  }
*/

}
