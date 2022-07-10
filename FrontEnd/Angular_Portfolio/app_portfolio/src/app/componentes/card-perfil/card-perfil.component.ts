import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user.model';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { UserService } from 'src/app/servicios/user/user.service';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.css']
})
export class CardPerfilComponent implements OnInit {
  user: user = new user("","","","","");
 
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    
    this.userService.getUser().subscribe(data => {this.user = data})
   
  }

}
