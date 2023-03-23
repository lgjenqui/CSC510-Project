export class Movie {
  title: string = "";
  genre: string = "";
  runtime: number = 0;
  mpaa_rating: string = "";
  release_year: number = 0;
  imdb_rating: number = 0;
  critics_rating: string = "";
  critics_score: number = 0;
  director: string = "";

  constructor() {
    this.clean();
  }

  clean(): void {
    this.title = "";
    this.genre = "";
    this.runtime = 0;
    this.mpaa_rating = "";
    this.release_year = 0;
    this.imdb_rating = 0;
    this.critics_rating = "";
    this.critics_score = 0;
    this.director = "";
  }

  clone(): Movie {
     var movie: Movie = new Movie();
     movie.copyFrom(this);
     return movie;
  }

  copyFrom(from: Movie): void {
    this.title = from.title;
    this.genre = from.genre;
    this.runtime = from.runtime;
    this.mpaa_rating = from.mpaa_rating;
    this.release_year = from.release_year;
    this.imdb_rating = from.imdb_rating;
    this.critics_rating = from.critics_rating;
    this.critics_score = from.critics_score;
    this.director = from.director;
  }

}