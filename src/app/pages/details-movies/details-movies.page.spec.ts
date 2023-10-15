import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsMoviesPage } from './details-movies.page';

describe('DetailsMoviesPage', () => {
  let component: DetailsMoviesPage;
  let fixture: ComponentFixture<DetailsMoviesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
