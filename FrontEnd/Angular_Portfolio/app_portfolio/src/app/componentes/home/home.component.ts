import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/servicios/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = '';
  user: user = new user("", "", "", "", "");

  constructor(
    public userService: UserService,
    private http:HttpClient) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => { this.user = data });
    this.http.get('http://localhost:8080/',{withCredentials: true}).subscribe((res: any) => {
      this.message = `Hi ${res.name}`;
    }, err => {
      this.message = 'no estas ingrezado'
    })

  }

}
