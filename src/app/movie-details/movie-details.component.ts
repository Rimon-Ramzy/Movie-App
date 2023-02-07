import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieId: any = '';
  movieDetails: any = {};
  baseUrl: string = '';


  constructor(private _activatedRoute: ActivatedRoute, private _moviesService: MoviesService) {
    this.baseUrl = this._moviesService.imagePrefix
    this.movieId = this._activatedRoute.snapshot.params["id"];
    this._moviesService.getDetails(this.movieId).subscribe({
      next: (res) => this.movieDetails = res
    })
  }

  ngOnInit(): void {
  }
}
