from flask import render_template, redirect, jsonify
from flask_app import app
from flask_app.models.Article import Article
from flask_app.helpers.scrape_save import scrape_save


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


@app.route('/api/team/<team_name>')
def get_team_news(team_name: str):
    return Article.get_by_team(team_name)


@app.route('/api/<int:article_id>')
def show_article(article_id: int):
    return Article.get_one(article_id)


@app.route('/api/<int:article_id>', methods=['DELETE'])
def remove_article(article_id: int):
    return Article.remove(article_id)


@app.route('/api/scrape/<team_name>')
def scrape_articles_by_team(team_name: str):
    return scrape_save(team=team_name)
