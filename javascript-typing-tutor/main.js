
var spanIndex = 0;
var mistakesCount = 0;

var comments = ['WRONG KEY!', ''];
var $infoSectionText = document.querySelector('.info-section-text');
var $summarySectionText = document.querySelector('.info-section-summary');
var $spanKey = document.querySelectorAll('span');
var $endGameSection = document.querySelector('.end-game-section');

function handleTyping(event) {
  if (event.key === $spanKey[spanIndex].textContent && spanIndex < 29) {
    $spanKey[spanIndex].className = 'color-green';
    $spanKey[spanIndex + 1].className = 'letter-underline';
    spanIndex++;
    $infoSectionText.textContent = comments[1];

  } else if (event.key !== $spanKey[spanIndex].textContent && spanIndex <= 29) {
    $spanKey[spanIndex].className = 'color-red';
    mistakesCount++;
    $infoSectionText.className = 'info-section-wrong-button';
    $infoSectionText.textContent = comments[0];

  } else if (event.key === $spanKey[spanIndex].textContent && spanIndex === 29) {
    $spanKey[spanIndex].className = 'color-green';
    if (mistakesCount === 0) {
      $infoSectionText.textContent = "You didn't make any mistakes!";
      $summarySectionText.textContent = 'Your accuracy is awsome!';
      $endGameSection.className = 'end-game-section-visible';
    }
    if (mistakesCount > 0 && mistakesCount <= 6) {
      $infoSectionText.textContent = "You've made " + mistakesCount + ' mistakes.';
      $summarySectionText.textContent = 'Your accuracy is very good';
      $endGameSection.className = 'end-game-section-visible';
    } if (mistakesCount >= 6) {
      $infoSectionText.textContent = "You've made " + mistakesCount + ' mistakes.';
      $summarySectionText.textContent = 'Your accuracy is good.';
      $endGameSection.className = 'end-game-section-visible';

    } if (mistakesCount >= 10) {
      $infoSectionText.textContent = "You've made " + mistakesCount + ' mistakes.';
      $summarySectionText.textContent = 'Your accuracy is not good.';
      $endGameSection.className = 'end-game-section-visible';

    } if (mistakesCount >= 15) {
      $infoSectionText.textContent = "You've made " + mistakesCount + ' mistakes.';
      $summarySectionText.textContent = 'Your accuracy is low.';
      $endGameSection.className = 'end-game-sectiong-visible';

    } if (mistakesCount >= 18) {
      $infoSectionText.textContent = "You've made " + mistakesCount + ' mistakes.';
      $summarySectionText.textContent = 'Your accuracy is very low.';
      $endGameSection.className = 'end-game-sectiong-visible';

    } if (mistakesCount > 25) {
      $infoSectionText.textContent = "You've made " + mistakesCount + ' mistakes.';
      $summarySectionText.textContent = 'You might consider buying a pen...';
      $endGameSection.className = 'end-game-section-visible';

    }
  }
}

document.addEventListener('keydown', handleTyping);
