from flask import render_template
from flask_app import app
from flask_app.models.Article import Article


@app.route('/')
def home():
    response = Article.get_all()
    return render_template('index.html', articles=response)
