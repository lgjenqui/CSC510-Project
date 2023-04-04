import * as request from "request";


const base_url = "http://localhost:3000/";

describe("The server's Get Movies endpoint", () => {
  it("Checks that 651 movies are returned by the endpoint", (done) => {
    request.get(base_url + "movies", (error:Error | null, response:request.Response | null, body:string) => {
      expect(response?.statusCode).toBe(200);
      expect(JSON.parse(body).length).toEqual(651);
      done();
    });
  });
});

describe("The server's Post recmovies endpoint", () => {
  it("Returns status code 200 and a list of movies", (done) => {
    const requestData = {
      emotion: "Happy",
      occasion: "Date Night",
      mpaa_rating: "PG",
      start_release_year: 2000,
      last_release_year: 2022
    };

    request.post(
      base_url + "recmovies",
      { json: requestData },
      (error:Error | null, response:request.Response | null, body:string) => {
        expect(response?.statusCode).toBe(200);
        expect(Array.isArray(JSON.parse(body))).toBe(true);
        done();
      }
    );
  });

  it("Returns status code 204 if no movies are found", (done) => {
    const requestData = {
      emotion: "Happy",
      occasion: "Date Night",
      mpaa_rating: "PG-13",
      start_release_year: 1990,
      last_release_year: 1999
    };

    request.post(
      base_url + "recmovies",
      { json: requestData },
      (error:Error | null, response:request.Response | null, body:string) => {
        expect(response?.statusCode).toBe(204);
        expect(body).toEqual("[]");
        done();
      }
    );
  });

  it("Returns status code 206 and a list of movies if none are found in the specified range, but some are found after expanding the range", (done) => {
    const requestData = {
      emotion: "Happy",
      occasion: "Date Night",
      mpaa_rating: "R",
      start_release_year: 2010,
      last_release_year: 2015
    };

    request.post(
      base_url + "recmovies",
      { json: requestData },
      (error:Error | null, response:request.Response | null, body:string) => {
        expect(response?.statusCode).toBe(206);
        expect(Array.isArray(JSON.parse(body))).toBe(true);
        done();
      }
    );
  });
});


