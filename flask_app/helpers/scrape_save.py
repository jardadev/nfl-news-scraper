def scrape_save(team: str, limit: int = 10):
    from flask_app.utils.Scraper import Scraper
    from flask_app.models.Article import Article

    br_articles = Scraper.scrape_br(team, limit)
    articles = Article.save(br_articles)

    return articles[1]
