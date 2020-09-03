import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Game } from '../shared/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) {}
  arrGames = [];

  ngOnInit () {
    this.apiService.get().subscribe((data: any[])=>{  
      console.log(data); 
      this.arrGames = data; 
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  
}