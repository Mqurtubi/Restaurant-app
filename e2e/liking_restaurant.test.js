/* eslint-disable no-undef */
Feature('liking restaurant');

Scenario('test Like and unlike', ({ I }) => {
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('.judul a');
  I.wait(2);
  I.click(locate('.judul a').first());
  I.wait(2);
  I.seeElement('#likeButton');
  I.wait(2);
  I.click('#likeButton');
  I.wait(2);
  I.amOnPage('/#/favorite');
  I.wait(2);
  I.seeElement('restaurant-item');
  I.wait(2);
  I.seeElement('.judul a');
  I.wait(2);
  I.click(locate('.judul a').first());
  I.wait(2);
  I.seeElement('#likeButton');
  I.wait(2);
  I.click('#likeButton');
  I.wait(2);
  I.amOnPage('/#/favorite');
  I.wait(5);
});

Scenario('test review', ({ I }) => {
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('.judul a');
  I.wait(2);
  I.click(locate('.judul a').first());
  I.wait(2);
  I.seeElement('#formReview');
  I.fillField('#namaReview', 'qurtubi');
  I.fillField('#pesanReview', 'layanan bagus');
  I.wait(5);
  I.click('input[type=submit]');
  I.wait(2);
  I.seeElement(locate('.reviews').last());
  I.wait(5);
});
