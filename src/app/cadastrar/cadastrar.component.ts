import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmeSenha: string
  tipoUsuario: string

  constructor(

    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)

  }

  confirmSenha(event: any) {
    this.confirmeSenha = event.target.value

  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
    
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmeSenha){
      alert('A senhas estão incorretas.')

    }else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {

        this.user = resp
        console.log(this.user.nome)
        console.log(this.user.foto)
        this.router.navigate(['/entrar'])
        alert('Usuario cadastrado com sucesso!')
      })
    }


  }

}
