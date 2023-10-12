def scrape_all_teams():
    from flask_app.utils.Scraper import Scraper
    from flask_app.models.Article import Article

    teams = Scraper.BR_NFL_TEAMS.keys()

    for team in teams:
        br_articles = Scraper.scrape_br(team, 30)
        Article.save(br_articles)

    return "Scraped all teams"


if __name__ == "__main__":
    print(scrape_all_teams())
