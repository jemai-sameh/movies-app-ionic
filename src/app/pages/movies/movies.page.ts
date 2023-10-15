import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  category="popular"
  type="movie"
  movies = [];
  currentPage = 1;
  imageBaseUrl = environment.images;

  constructor(private activatedRoute: ActivatedRoute,
     private movieService:MoviesService,
     private loadingCtr: LoadingController
       ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.category = p.get('category');
        this.type = p.get('type');

        console.log(this.category);
        //this.selectedCourse = this.courseSer.getCourseById(id);
      },
    });  

    this.loadMovies();

  
  }

    

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtr.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.movieService.getMovies(this.type,this.category,this.currentPage).subscribe(res => {
      loading.dismiss();
      this.movies.push(...res.results);
      event?.target.complete();
      if (event) {
        event.target.disabled = res.total_pages === this.currentPage;
      }
    });
  }
  async loadSearch(input,event?: InfiniteScrollCustomEvent) {
    if(input==="") this.loadMovies()
    else {
    const loading = await this.loadingCtr.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
   // await loading.present();

    this.movieService.search(input,this.type,this.currentPage).subscribe(res => {
      loading.dismiss();
      console.log(res.results)
      this.movies=res.results;
      event?.target.complete();
      if (event) {
        event.target.disabled = res.total_pages === this.currentPage;
      }
    });
  }
  }


  loadMore(event: any) {
    this.currentPage++;
    this.loadMovies(event);

  }

}
