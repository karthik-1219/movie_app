from flask import Flask
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    CORS(app)

    from .movies_api import movies_api
    app.register_blueprint(movies_api)
    return app
