from flask_app import app
from flask_app.models.Article import Article
from flask_app.helpers.scrape_save import scrape_save


@app.route('/')
@app.route('/api')
def get_all_articles():
    """
    Endpoint for the home page of the NFL News API.

    This endpoint retrieves all articles from the database using the `Article.get_all()` method
    and renders the 'index.html' template with the list of articles.

        Returns:
            flask.Response: A rendered HTML page displaying the list of NFL news articles.
    """
    return Article.get_all()


@app.route('/api/team/<team_name>')
def get_team_news(team_name: str):
    return Article.get_by_team(team_name)


@app.route('/api/teams')
def get_team_names():
    return Article.get_team_names()


@app.route('/api/<int:article_id>')
def show_article(article_id: int):
    return Article.get_one(article_id)


@app.route('/api/<int:article_id>', methods=['DELETE'])
def remove_article(article_id: int):
    return Article.remove(article_id)


@app.route('/api/scrape/<team_name>/', defaults={'limit': 10})
@app.route('/api/scrape/<team_name>/<int:limit>')
def scrape_articles_by_team(team_name: str, limit: int):
    return scrape_save(team=team_name, limit=limit)
