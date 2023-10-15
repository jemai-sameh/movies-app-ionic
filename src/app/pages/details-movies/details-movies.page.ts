import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.page.html',
  styleUrls: ['./details-movies.page.scss'],
})
export class DetailsMoviesPage implements OnInit {
  type="movie"
  movie=null;
  imageBaseUrl=environment.images;


  constructor( private activatedRoute:ActivatedRoute , private movieService: MoviesService) { }

  ngOnInit() {
    //=this.route.snapshot.paramMap.get('id');
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        let id = p.get('id');
        this.type = p.get('type');
        this.movieService.getMovieDetails(this.type,id).subscribe(res=>{
          console.log(res)
          this.movie=res;
        })
      },
    }); 
   
  }

  openHomePage(){
    window.open(this.movie.homepage)
  }

}
