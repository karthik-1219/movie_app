from backend import app


def test_movies_endpoint_returns_200():
    response = app.test_client().get("/movies")
    assert response.status_code == 200


def test_movies_endpoint_returns_json():
    response = app.test_client().get("/movies")
    assert response.is_json
    assert "movies" in response.get_json()


def test_movies_endpoint_returns_valid_data():
    movies = app.test_client().get("/movies").get_json()["movies"]
    assert len(movies) == 3
    assert movies[0]["title"] == "Top Gun: Maverick"
