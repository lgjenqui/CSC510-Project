export interface MovieSearchForm {
    title: string;
    genre: string;
    runtime: number | null;
    mpaa_rating: string;
    release_year_start: number | null;
    release_year_end: number | null;
    imdb_rating: number | null;
    critics_score: number | null;
    director: string;
    actor1: string;
    actor2: string;
    actor3: string;
    approximate_runtime: boolean;
    approximate_release_year: boolean;
  }
  