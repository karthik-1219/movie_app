from flask import Blueprint, jsonify

from .resources import MOVIES

movies_api = Blueprint("movies", __name__)


@movies_api.get("/movies")
def get_movies():
    return jsonify({"movies": MOVIES})


@movies_api.get("/health")
def health():
    return jsonify({"status": "ok"})
