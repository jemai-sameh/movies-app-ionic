import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(    private activatedRoute: ActivatedRoute    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        let category = p.get('category');
        console.log(category);
        //this.selectedCourse = this.courseSer.getCourseById(id);
      },
    });  }

}
