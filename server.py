from flask_app import app
from flask_app.controllers import articles

# remove debug argument in production environment
if __name__ == "__main__":
    app.run(debug=True)

