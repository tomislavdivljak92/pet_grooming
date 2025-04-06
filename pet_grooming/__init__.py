from flask import Flask
from pet_grooming.routes import init_routes  # Import routes function

def create_app():
    app = Flask(__name__)

    # Initialize routes
    init_routes(app)

    return app
