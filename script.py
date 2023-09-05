from classes.Scraper import Scraper
from db.ArticleService import ArticleService


def scrape(team: str, limit: int = 10):
    br_articles = Scraper.scrape_br(team, limit)
    filtered_articles = ArticleService.remove_duplicate_articles(br_articles)
    articles = ArticleService.add_articles(filtered_articles)

    return articles


def get_articles(team: str):
    return ArticleService.get_by_team(team)


print(scrape('bears', 5))

