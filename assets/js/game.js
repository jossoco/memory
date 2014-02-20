$(document).ready(function() {

  var ROWS = 4;
  var COLUMNS = 7;
  var MAX_FLIPPED_CARDS = 2;

  var flippedCards = [];

  var getCardSymbols = function (cardCount) {
    var allSymbols = config.CARD_SYMBOLS;
    var cardSymbols = [];
    for (var i = 0; i < cardCount; i++) {
      var symbolIndex = Math.floor(Math.random() * allSymbols.length);
      var symbol = allSymbols[symbolIndex];
      cardSymbols.push(symbol);
      allSymbols.splice(symbolIndex, 1);
    }
    return cardSymbols;
  };

  var shuffle = function (cards) {
    _.each(cards, function (card, i) {
      var swap = Math.floor(Math.random() * cards.length);
      cards[i] = cards[swap];
      cards[swap] = card;
    });
    return cards;
  };

  var getCards = function () {
    var cardCount = ROWS * COLUMNS / 2;
    var symbols = getCardSymbols(cardCount);
    var cards = [];

    for (var i = 0; i < cardCount; i++) {
      // create a pair of cards
      cards.push(Card('card-' + i + '-a', symbols[i]));
      cards.push(Card('card-' + i + '-b', symbols[i]));
    }
    return shuffle(cards);
  };

  var appendCards = function () {
    var gamePanel = $('#game');
    var cards = getCards();
    _.each(cards, function (card, i) {
      gamePanel.append(card);
      var id = $(card).find('.card').attr('id');
      var container = $('#' + id).parent();

      var row = parseInt(i / COLUMNS, 10);
      var col = i - row * COLUMNS;
      container.css('left', col * 120 + 'px');
      container.css('top', row * 120 + 'px');
    });
  };

  var flipCard = function (card) {
    card.translate3d({yRotate: 0}, config.FLIP_SPEED);
    card.addClass('flipped');
    flippedCards.push(card.attr('id'));
  };

  var unflipCard = function (card) {
    card.translate3d({yRotate: -180}, config.FLIP_SPEED);
    card.removeClass('flipped');
    flippedCards.splice(flippedCards.indexOf(card.attr('id')), 1);
  };

  var unflipAllCards = function () {
    _.each(flippedCards, function (cardId) {
      var card = $('#' + cardId);
      card.translate3d({yRotate: -180}, config.FLIP_SPEED);
      card.removeClass('flipped');
    });
    flippedCards = [];
  };

  var isMatch = function () {
    if (flippedCards.length !== MAX_FLIPPED_CARDS) return false;
    return flippedCards[0].substring(0, flippedCards[0].length - 2) ===
           flippedCards[1].substring(0, flippedCards[1].length - 2);
  };

  var checkForMatch = function () {
    if (isMatch()) {
      $('#' + flippedCards[0]).add('#' + flippedCards[1]).fadeOut();
      flippedCards = [];
    }
  };

  var closeMenu = function (e) {
    e.stopImmediatePropagation();
    $('body').addClass('panel-hide');
  };

  var openMenu = function (e) {
    e.stopImmediatePropagation();
    $('body').removeClass('panel-hide');
  };

  var setBackground = function (event) {
    // clear body background
    var body = $('body');
    _.each($('.background-option'), function (option) {
      var bg = $(option).attr('id');
      body.removeClass(bg);
    });

    var option = $(event.target).closest('.background-option');
    var bg = option.attr('id');
    body.addClass(bg);
    $('.background-option').removeClass('selected');
    option.addClass('selected');
  };

  var bindEvents = function () {
    var flip = function (event) {
      var el = $($(event.target).closest('.card'));
      if (el.hasClass('flipped')) {
        unflipCard(el);
      } else {
        if (flippedCards.length === MAX_FLIPPED_CARDS) {
          unflipAllCards();
        }
        flipCard(el);
        checkForMatch();
      }
    };

    // bind events
    $('.card').bind('click', flip);
    $('.background-option').bind('click', setBackground);
    $('.menu-panel .hide-btn').bind('click', closeMenu);
    $('.menu-panel').bind('click', openMenu);
  };

  appendCards();
  bindEvents();
});
