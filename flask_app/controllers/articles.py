from flask import render_template
from flask_app import app
from flask_app.models.Article import Article


@app.route('/')
def home():
    """
    Endpoint for the home page of the NFL News API.

    This endpoint retrieves all articles from the database using the `Article.get_all()` method
    and renders the 'index.html' template with the list of articles.

        Returns:
            flask.Response: A rendered HTML page displaying the list of NFL news articles.
    """
    response = Article.get_all()
    return render_template('index.html', articles=response)
