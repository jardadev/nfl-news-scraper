class Article:

    def __init__(self, team_name: str, headline: str, link: str, image: str, summary: str = ''):
        self.team_name = team_name
        self.headline = headline
        self.link = link
        self.image = image
        self.summary = summary
