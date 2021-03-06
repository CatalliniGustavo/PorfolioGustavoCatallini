import { Component, OnInit, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { user } from 'src/app/model/user.model';
import { TokenService } from 'src/app/servicios/token.service';
import { UserService } from 'src/app/servicios/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: user = new user("", "", "", "", "", "", "");
  login: boolean = false;

  constructor(
    public userService: UserService,
    private tokenService: TokenService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getAthorities().length != 0) {
      this.login = true;
      this.userService.getUser().subscribe(data => { this.user = data });
    }

    
  }

  open(content: any) {
    this.modalService.open(content);
  }
  //Herramienta para saber las coordenadas del scroll
  // @HostListener("document:scroll")
  // scrollfunction(){

  //   console.log("==" + document.documentElement.scrollTop)
  // }
}
