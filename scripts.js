function createPlayer(name, avatar, mark, score) {
  return {
    name,
    avatar,
    mark,
    score,
  };
}

// GAME SELECTION MODULE
const newGame = (() => {
  let gameMode = 'pvp'; // Default game mode

  // PLAYER ONE INFO
  const player = createPlayer('', '', '', 0);
  const playerNameInput = document.querySelector('.player-name');
  const playerAvatarsTitle = document.querySelector('.player-avatar-title');
  const playerAvatars = document.querySelectorAll('.player-avatars i');
  const playerGameAvatar = document.createElement('i');
  const playerMarksTitle = document.querySelector('.player-mark-title');
  const playerMarks = document.querySelectorAll('.player-marks i');
  const playerGameMark = document.createElement('i');
  // AVATAR & MARK SELECTIONS
  function selectPlayerIcons(target) {
    const playerIcons = document.querySelectorAll('#player i');
    if (target.classList.contains('fa-user-astronaut')) {
      target.classList.add('theme-astronaut');
      playerIcons[1].classList.remove('theme-cat');
      playerGameAvatar.classList.remove('fad', 'fa-cat-space', 'theme-cat');
      playerGameAvatar.classList.add('fad', 'fa-user-astronaut', 'theme-astronaut');
    } else if (target.classList.contains('fa-cat-space')) {
      target.classList.add('theme-cat');
      playerIcons[0].classList.remove('theme-astronaut');
      playerGameAvatar.classList.remove('fad', 'fa-user-astronaut', 'theme-astronaut');
      playerGameAvatar.classList.add('fad', 'fa-cat-space', 'theme-cat');
    }
    if (target.classList.contains('fa-rocket-launch')) {
      target.classList.add('theme-rocket');
      playerIcons[3].classList.remove('theme-comet');
      playerGameMark.classList.remove('fad', 'fa-comet', 'fa-flip-horizontal', 'theme-comet');
      playerGameMark.classList.add('fad', 'fa-rocket-launch', 'theme-rocket');
    } else if (target.classList.contains('fa-comet')) {
      target.classList.add('theme-comet');
      playerIcons[2].classList.remove('theme-rocket');
      playerGameMark.classList.remove('fad', 'fa-rocket-launch', 'theme-rocket');
      playerGameMark.classList.add('fad', 'fa-comet', 'fa-flip-horizontal', 'theme-comet');
    }
  }
  // ENEMY HUMAN INFO
  const enemy = createPlayer('', '', '', 0);
  const enemyNameInput = document.querySelector('.player-enemy-name');
  const enemyAvatarsTitle = document.querySelector('.enemy-avatar-title');
  const enemyAvatars = document.querySelectorAll('.enemy-avatars i');
  const enemyGameAvatar = document.createElement('i');
  const enemyMarksTitle = document.querySelector('.enemy-mark-title');
  const enemyMarks = document.querySelectorAll('.enemy-marks i');
  const enemyGameMark = document.createElement('i');
  // AVATAR & MARK SELECTIONS
  function selectEnemyIcons(target) {
    const enemyIcons = document.querySelectorAll('#player-enemy i');
    if (target.classList.contains('fa-alicorn')) {
      target.classList.add('theme-alicorn');
      enemyIcons[1].classList.remove('theme-cowboy');
      enemyGameAvatar.classList.remove('fad', 'fa-user-cowboy', 'theme-cowboy');
      enemyGameAvatar.classList.add('fad', 'fa-alicorn', 'fa-flip-horizontal', 'theme-alicorn');
    } else if (target.classList.contains('fa-user-cowboy')) {
      target.classList.add('theme-cowboy');
      enemyIcons[0].classList.remove('theme-alicorn');
      enemyGameAvatar.classList.remove('fad', 'fa-alicorn', 'fa-flip-horizontal', 'theme-alicorn');
      enemyGameAvatar.classList.add('fad', 'fa-user-cowboy', 'theme-cowboy');
    }
    if (target.classList.contains('fa-meteor')) {
      target.classList.add('theme-meteor');
      enemyIcons[3].classList.remove('theme-star');
      enemyGameMark.classList.remove('fad', 'fa-star-shooting', 'theme-star');
      enemyGameMark.classList.add('fad', 'fa-meteor', 'theme-meteor');
    } else if (target.classList.contains('fa-star-shooting')) {
      target.classList.add('theme-star');
      enemyIcons[2].classList.remove('theme-meteor');
      enemyGameMark.classList.remove('fad', 'fa-meteor', 'theme-meteor');
      enemyGameMark.classList.add('fad', 'fa-star-shooting', 'theme-star');
    }
  }

  // ENEMY COMPUTER INFO
  const computerAvatars = document.querySelectorAll('.alien-icon');
  const selectComputerAvatar = computerAvatars[Math.floor(Math.random() * computerAvatars.length)];
  const computerGameAvatar = document.createElement('i');
  const computerMarks = document.querySelectorAll('.alien-mark-icon');
  const selectComputerMark = computerMarks[Math.floor(Math.random() * computerMarks.length)];
  const computerGameMark = document.createElement('i');
  // AVATAR & MARK SELECTIONS
  function selectComputerIcons() {
    if (selectComputerAvatar.classList.contains('fa-pastafarianism')) {
      selectComputerAvatar.classList.add('theme-pastafarianism');
      computerGameAvatar.classList.add('fad', 'fa-pastafarianism', 'theme-pastafarianism');
    } else if (selectComputerAvatar.classList.contains('fa-alien-monster')) {
      selectComputerAvatar.classList.add('theme-alien');
      computerGameAvatar.classList.add('fad', 'fa-alien-monster', 'theme-alien');
    }
    if (selectComputerMark.classList.contains('fa-bacterium')) {
      selectComputerMark.classList.add('theme-bacterium');
      computerGameMark.classList.add('fad', 'fa-bacterium', 'theme-bacterium');
    } else if (selectComputerMark.classList.contains('fa-virus')) {
      selectComputerMark.classList.add('theme-virus');
      computerGameMark.classList.add('fad', 'fa-virus', 'theme-virus');
    }
  }

  // UPDATE PLAYER OBJECT
  function updatePlayerObj() {
    player.name = playerNameInput.value;
    player.avatar = playerGameAvatar;
    player.mark = playerGameMark;
  }
  // UPDATE ENEMY OBJECT
  function updateEnemyObj() {
    if (gameMode === 'pvp') { // Enemy info if it is another human
      enemy.name = enemyNameInput.value;
      enemy.avatar = enemyGameAvatar;
      enemy.mark = enemyGameMark;
    } else if (gameMode === 'pve') { // Enemy info if it is a computer
      enemy.name = 'Alienzo';
      enemy.avatar = computerGameAvatar;
      enemy.mark = computerGameMark;
    }
  }

  function selectGameMode(target) {
    const pvpMode = document.querySelector('#player-enemy');
    const pveMode = document.querySelector('#player-computer');
    if (target.classList.contains('pvp')) {
      pvpMode.className = 'display-block';
      pveMode.className = 'display-none';
      gameMode = 'pvp';
    } else if (target.classList.contains('pve')) {
      pveMode.className = 'display-block';
      pvpMode.className = 'display-none';
      gameMode = 'pve';
      selectComputerIcons();
    }
  }

  function selectGalaxy(target) {
    const gameBody = document.querySelector('#body');
    const combatPlaceInfo = document.querySelector('#place');
    gameBody.classList.remove('body-bg', 'andromeda', 'black-eye', 'fireworks', 'milky-way');
    if (target.id === 'andromeda') {
      gameBody.classList.add('andromeda');
      combatPlaceInfo.textContent = 'Save the Andromeda Galaxy!';
    } else if (target.id === 'black-eye') {
      gameBody.classList.add('black-eye');
      combatPlaceInfo.textContent = 'Save the Black Eye Galaxy!';
    } else if (target.id === 'fireworks') {
      gameBody.classList.add('fireworks');
      combatPlaceInfo.textContent = 'Save the Fireworks Galaxy!';
    } else if (target.id === 'milky-way') {
      gameBody.classList.add('milky-way');
      combatPlaceInfo.textContent = 'Save the Milky Way Galaxy!';
    }
  }

  function validateSelections() {
    playerNameInput.classList.remove('input-error');
    playerAvatarsTitle.classList.remove('avatar-error');
    playerMarksTitle.classList.remove('mark-error');
    enemyNameInput.classList.remove('input-error');
    enemyAvatarsTitle.classList.remove('avatar-error');
    enemyMarksTitle.classList.remove('mark-error');
    // PLAYER NAME, AVATAR & MARK VALIDATIONS
    if (playerNameInput.value === '' || playerNameInput.value === 'Your Name') {
      playerNameInput.classList.add('input-error');
    }
    if (!playerAvatars[0].classList.contains('theme-astronaut')
      && !playerAvatars[1].classList.contains('theme-cat')) {
      playerAvatarsTitle.classList.add('avatar-error');
    }
    if (!playerMarks[0].classList.contains('theme-rocket')
      && !playerMarks[1].classList.contains('theme-comet')) {
      playerMarksTitle.classList.add('mark-error');
    }
    // ENEMY HUMAN NAME, AVATAR & MARK VALIDATIONS IF PVP MODE IS ACTIVE
    if (gameMode === 'pvp') {
      if (enemyNameInput.value === '' || enemyNameInput.value === 'Enemy Name') {
        enemyNameInput.classList.add('input-error');
      }
      if (!enemyAvatars[0].classList.contains('theme-alicorn')
      && !enemyAvatars[1].classList.contains('theme-cowboy')) {
        enemyAvatarsTitle.classList.add('avatar-error');
      }
      if (!enemyMarks[0].classList.contains('theme-meteor')
      && !enemyMarks[1].classList.contains('theme-star')) {
        enemyMarksTitle.classList.add('mark-error');
      }
    }
    // IF VALIDATION PASSES SHOWS UP A GAMEBOARD
    if (!playerNameInput.classList.contains('input-error')
    && !playerAvatarsTitle.classList.contains('avatar-error')
    && !playerMarksTitle.classList.contains('mark-error')
    && !enemyNameInput.classList.contains('input-error')
    && !enemyAvatarsTitle.classList.contains('avatar-error')
    && !enemyMarksTitle.classList.contains('mark-error')) {
      const gameSelectionWindow = document.querySelector('#game-selection-window');
      const gameWindow = document.querySelector('#game-window');
      gameSelectionWindow.className = 'display-none';
      gameWindow.className = 'display-block';
    }
  }

  // SHOW PLAYERS INFORMATION IN GAME PLAYING WINDOW
  function showPlayersInfo() {
    const playerGameName = document.querySelector('.player-game-name');
    const playerGameAvatarDiv = document.querySelector('.player-game-avatar');
    const playerGameMarkDiv = document.querySelector('.player-game-mark');
    const playerGameScore = document.querySelector('.player-game-score');
    playerGameName.textContent = player.name;
    playerGameAvatarDiv.appendChild(playerGameAvatar);
    playerGameMarkDiv.appendChild(playerGameMark);
    playerGameScore.textContent = player.score;
    if (gameMode === 'pvp') {
      const enemyGameName = document.querySelector('.enemy-game-name');
      const enemyGameAvatarDiv = document.querySelector('.enemy-game-avatar');
      const enemyGameMarkDiv = document.querySelector('.enemy-game-mark');
      const enemyGameScore = document.querySelector('.enemy-game-score');
      enemyGameName.textContent = enemy.name;
      enemyGameAvatarDiv.appendChild(enemyGameAvatar);
      enemyGameMarkDiv.appendChild(enemyGameMark);
      enemyGameScore.textContent = enemy.score;
    } else if (gameMode === 'pve') {
      const computerGameAvatarDiv = document.querySelector('.computer-game-avatar');
      const computerGameMarkDiv = document.querySelector('.computer-game-mark');
      const computerGameScore = document.querySelector('.computer-game-score');
      const enemyInfo = document.querySelector('#enemy-info');
      const computerInfo = document.querySelector('#computer-info');
      computerGameAvatarDiv.appendChild(computerGameAvatar);
      computerGameMarkDiv.appendChild(computerGameMark);
      computerGameScore.textContent = enemy.score;
      computerInfo.className = 'display-block';
      enemyInfo.className = 'display-none';
    }
  }

  function listenWindowClicks() {
    const selectionWindow = document.querySelector('#game-selection-window');
    selectionWindow.addEventListener('click', (event) => {
      const { target } = event;
      if (target.classList.contains('game-type')) {
        selectGameMode(target);
      } else if (target.classList.contains('player-icon')) {
        selectPlayerIcons(target);
      } else if (target.classList.contains('enemy-icon')) {
        selectEnemyIcons(target);
      } else if (target.classList.contains('galaxy')) {
        selectGalaxy(target);
      }
    });
  }
  listenWindowClicks();

  return {
    updatePlayerObj,
    updateEnemyObj,
    validateSelections,
    showPlayersInfo,
    player,
    enemy,
  };
})();

// PLAYGAME MODULE
const playGame = (() => {
  const playerGameboard = [false, false, false, false, false, false, false, false, false];
  const enemyGameboard = [false, false, false, false, false, false, false, false, false];
  let markSpot = '';

  function generateGameboard() {
    const boardDiv = document.querySelector('#gameboard');
    boardDiv.textContent = '';
    for (let i = 0; i < 9; i += 1) {
      const boardSpot = document.createElement('div');
      boardDiv.classList.add('grid-3x3');
      boardSpot.setAttribute('data-index', i);
      boardDiv.appendChild(boardSpot);
    }
  }

  function updateBoards(character) {
    if (character === 'player') {
      playerGameboard[markSpot] = true;
    } else if (character === 'enemy') {
      enemyGameboard[markSpot] = true;
    }
  }

  function selectSpot() {
    const allBoardSpots = document.querySelectorAll('#gameboard > div');
    let click = 1;
    allBoardSpots.forEach((div) => {
      div.addEventListener('click', () => {
        if (click === 1) {
          const playerMark = newGame.player.mark;
          const playerMarkClone = playerMark.cloneNode();
          playerMarkClone.classList.add('mark-clone');
          div.appendChild(playerMarkClone);
          markSpot = div.getAttribute('data-index');
          updateBoards('player');
          click += 1;
        } else if (click === 2) {
          const enemyMark = newGame.enemy.mark;
          const enemyMarkClone = enemyMark.cloneNode();
          enemyMarkClone.classList.add('mark-clone');
          div.appendChild(enemyMarkClone);
          markSpot = div.getAttribute('data-index');
          updateBoards('enemy');
          click -= 1;
        }
      });
    });
  }

  function listenButtonsClicks() {
    const gameButtons = document.querySelectorAll('button');
    gameButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.classList.contains('play-btn')) {
          newGame.updatePlayerObj();
          newGame.updateEnemyObj();
          newGame.validateSelections();
          newGame.showPlayersInfo();
        } else if (button.classList.contains('new-game')) {
          window.location.reload();
        } else if (button.classList.contains('next-round')) {
          console.log('next round');
        }
      });
    });
  }
  generateGameboard();
  selectSpot();
  listenButtonsClicks();
  return {};
})();
