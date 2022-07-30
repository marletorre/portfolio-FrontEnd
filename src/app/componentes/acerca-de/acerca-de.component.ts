import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  nombre:string='Marlene Torrealba';
  cargo:string='Full Stack Developer Jr'
  faPen=faPen;
  constructor() { }

  ngOnInit(): void {
  }

}
