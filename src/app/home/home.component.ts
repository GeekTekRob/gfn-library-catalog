import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor (private httpService: HttpClient) { }
  arrGames: string [];

  ngOnInit () {
    this.httpService.get('https://static.nvidiagrid.net/supported-public-game-list/gfnpc.json').subscribe(
      data => {
        this.arrGames = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrGames[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}