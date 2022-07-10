import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private http: HttpClient) {
    this.form = this.formBuilder.group({
      nombre: '',
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {

  }

  home() {
    this.router.navigate([''])
  }

  submit() {
    this.http.post('http://localhost:8080/usuario/crear', this.form.getRawValue()).subscribe(res => this.router.navigate(['/login']));
  }
}
