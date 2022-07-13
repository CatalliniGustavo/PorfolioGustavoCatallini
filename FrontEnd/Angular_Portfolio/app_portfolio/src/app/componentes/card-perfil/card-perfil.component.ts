import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user.model';
import { TokenService } from 'src/app/servicios/token.service';
import { UserService } from 'src/app/servicios/user/user.service';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.css']
})
export class CardPerfilComponent implements OnInit {

  user: user = new user("", "", "", "", "");
  admin: boolean = false;
  isLogin: boolean = false;
  constructor(public userService: UserService, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getAthorities().includes("ROLE_ADMIN")) {
      this.admin = true;
    }
    if (this.tokenService.getToken()) {
      this.isLogin = true;
    }
    this.userService.getUser().subscribe(data => { this.user = data })

  }

}
