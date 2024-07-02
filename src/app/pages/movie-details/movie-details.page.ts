
import { MovieService } from './../../services/movie.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie = null;
  imgBaseUrl = environment.images;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    this.movieService.getMovieDetails(id).subscribe((res) => {
      // console.log(res);
      this.movie = res;
    });
  }
  OpenHomePage(){
    window.open(this.movie.homepage)
  }
}
