from supa_config import supa

TABLE = 'Articles'


class ArticleService:

    @staticmethod
    def get_all() -> list[dict[str, str | int]]:
        articles = supa.table(TABLE).select('*').execute()

        assert len(articles.data) > 0
        return articles.data

    @staticmethod
    def get_one(article_id: int) -> list[dict[str, str | int]]:
        article = supa.table(TABLE).select('*').eq('id', article_id).execute()

        assert len(article.data) > 0
        return article.data

    @staticmethod
    def get_by_team(team: str) -> list[dict[str, str | int]]:
        team = team.title()
        team_articles = supa.table(TABLE).select('*').eq('team_name', team).execute()

        assert len(team_articles.data) > 0
        return team_articles.data

    @staticmethod
    def get_by_column(column: str) -> list[dict[str, str | int]]:
        try:
            column = column.lower()
            column_items = supa.table(TABLE).select(column).execute()

            assert len(column_items.data) > 0
        except AssertionError:
            print('Field empty, 0 results returned.')

        return column_items.data

    @staticmethod
    def add_articles(articles: list[Article] | dict[str, str | int]) -> list[dict[str, str | int]]:
        articles_dict = []

        if type(articles) is list:
            for article in articles:
                articles_dict.append(vars(article))
        else:
            articles_dict.append(articles)

        data, count = supa.table(TABLE).insert(articles_dict).execute()
        return data

    @staticmethod
    def remove_duplicate_articles(articles: list[Article]) -> list[Article]:
        column_articles: list[dict[str, str]] = ArticleService.get_by_column('headline')
        filtered_articles: list[Article] = []
        article_headlines = []

        for article in articles:
            for obj in column_articles:
                article_headlines.append(obj['headline'])
            if article.headline in article_headlines:
                print(f'Article {article.headline} already in database; skipping over this item.')
                continue
            else:
                filtered_articles.append(article)

        return filtered_articles

    @staticmethod
    def remove_article(article_id: int):
        data = supa.table(TABLE).delete().eq('id', article_id).execute()
        return data
