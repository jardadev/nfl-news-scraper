from flask_app.config.supa_config import supa

TABLE = 'Articles'


class Article:

    def __init__(self, data: dict):
        self.team_name = data['team_name']
        self.headline = data['headline']
        self.link = data['link']
        self.image = data['image']
        self.summary = data['summary']

    @classmethod
    def get_all(cls) -> list[object]:
        query_results = supa.table(TABLE).select('*').execute()
        articles = []

        for a in query_results.data:
            articles.append(cls(a))

        return articles

    @classmethod
    def get_one(cls, article_id: int) -> object:
        query_results = supa.table(TABLE).select('*').eq('id', article_id).execute()
        articles = query_results.data
        article = cls(articles[0])

        return article

    @classmethod
    def get_by_team(cls, team: str) -> list[object]:
        team = team.title()
        query_results = supa.table(TABLE).select('*').eq('team_name', team).execute()
        articles = []

        for article in query_results.data:
            articles.append(cls(article))

        return articles

    @classmethod
    def get_by_column(cls, column: str) -> list[object]:
        column = column.lower()
        query_results = supa.table(TABLE).select(column).execute()
        articles = []

        for article in query_results.data:

            articles.append(article)

        return articles

    @classmethod
    def save(cls, article_list: list | dict[str, str | int]) -> list[dict[str, str | int]]:
        filtered_articles = cls.remove_duplicate_articles(article_list)
        data, count = supa.table(TABLE).insert(filtered_articles).execute()

        return data

    @classmethod
    def remove_duplicate_articles(cls, articles: list) -> list:
        column_articles: list[object] = cls.get_by_column('headline')
        filtered_articles: list[object] = []
        article_headlines = []

        for article in articles:
            for obj in column_articles:
                article_headlines.append(obj['headline'])
            if article['headline'] in article_headlines:
                print(f'Article {article["headline"]} already in database; skipping over this item.')
                continue
            else:
                filtered_articles.append(article)

        return filtered_articles

    @classmethod
    def remove_article(cls, article_id: int):
        data = supa.table(TABLE).delete().eq('id', article_id).execute()
        return data


if __name__ == "__main__":
    test_dict = [{'headline': 'NFL Power Rankings Return 📊',
                 'link': 'https://bleacherreport.com/articles/10088020-2023-br-nfl-power-rankings-where-does-every-team-stand-entering-week-1',
                 'image': 'https://media.bleacherreport.com/image/upload/c_crop,h_0.90,w_0.90,x_0.06,y_0.06/v1693952512/hutq42hh56t0pxmhqcnp.jpg',
                 'summary': 'Where the Bears stand after making some offseason improvements 📲',
                 'team_name': 'Bears'}]

    print(Article.save(test_dict))
