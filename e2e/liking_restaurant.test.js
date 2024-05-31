Feature("liking restaurant");

Scenario("test something", ({ I }) => {
  I.amOnPage("/");
  I.wait(5);
  I.seeElement(".judul a");
  I.click(locate(".judul a").first());
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/favorite");
  I.seeElement("restaurant-item");
  I.seeElement(".judul a");
  I.click(locate(".judul a").first());
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.wait(5);
});
