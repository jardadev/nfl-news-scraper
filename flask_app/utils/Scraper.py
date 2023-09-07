from bs4 import BeautifulSoup
import requests


class Scraper:

    BR_NFL_TEAMS = {
        "49ers": "san-francisco-49ers",
        "Bears": "chicago-bears",
        "Bengals": "cincinnati-bengals",
        "Bills": "buffalo-bills",
        "Broncos": "denver-broncos",
        "Browns": "cleveland-browns",
        "Buccaneers": "tampa-bay-buccaneers",
        "Cardinals": "arizona-cardinals",
        "Chargers": "los-angeles-chargers",
        "Chiefs": "kansas-city-chiefs",
        "Colts": "indianapolis-colts",
        "Commanders": "washington-commanders",
        "Cowboys":  "dallas-cowboys",
        "Dolphins": "miami-dolphins",
        "Eagles": "philadelphia-eagles",
        "Falcons": "atlanta-falcons",
        "Giants": "new-york-giants",
        "Jaguars": "jacksonville-jaguars",
        "Jets": "new-york-jets",
        "Lions": "detroit-lions",
        "Packers": "green-bay-packers",
        "Panthers": "carolina-panthers",
        "Patriots": "new-england-patriots",
        "Raiders": "las-vegas-raiders",
        "Rams": "los-angeles-rams",
        "Ravens": "baltimore-ravens",
        "Saints": "new-orleans-saints",
        "Seahawks": "seattle-seahawks",
        "Steelers": "pittsburgh-steelers",
        "Texans": "houston-texans",
        "Titans": "tennessee-titans",
        "Vikings":  "minnesota-vikings",
    }

    @classmethod
    def scrape_br(cls, team: str = 'bears', limit: int = 10) -> list[dict]:
        parsed_articles: list[dict] = []
        team = team.title()
        full_team_name = cls.BR_NFL_TEAMS[team]
        br_url = f'https://bleacherreport.com/{full_team_name}'
        response = requests.get(br_url)
        html_content = response.content
        soup = BeautifulSoup(html_content, 'html.parser')
        br_articles = soup.find_all('li', class_='articleSummary', limit=limit)

        for br_article in br_articles:
            headline = br_article.find('h3').text
            link = br_article.find('div', class_='articleMedia').a['href']
            image = br_article.find('div', class_='lazyImage').img['image']
            summary = br_article.find('p', class_='articleDescription')
            if summary:
                summary = summary.text

            article = {
                'headline': headline,
                'link': link,
                'image': image,
                'summary': summary,
                'team_name': team
            }

            parsed_articles.append(article)

        print(f'Successfully scraped {len(parsed_articles)} {team} articles.') if parsed_articles\
            else print(f'No articles scraped for {team}')
        return parsed_articles


if __name__ == "__main__":
    print(Scraper.scrape_br())