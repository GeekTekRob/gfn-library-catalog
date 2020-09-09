import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Game } from '../shared/game';
import { FilterPipe } from './filter.pipe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public searchText : string;
  constructor(private apiService: ApiService) {}
  arrGames: Game[] = [];

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