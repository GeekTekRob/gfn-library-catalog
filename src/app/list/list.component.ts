import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Game } from '../shared/game';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

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
