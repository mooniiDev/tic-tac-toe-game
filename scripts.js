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
  const playerMarksTitle = document.querySelector('.player-mark-title');
  const playerMarks = document.querySelectorAll('.player-marks i');
  let playerSelectedAvatar = '';
  let playerSelectedMark = '';
  // AVATAR & MARK SELECTION
  function selectPlayerIcons(target) {
    const playerIcons = document.querySelectorAll('#player i');
    if (target.classList.contains('fa-user-astronaut')) {
      target.classList.add('theme-astronaut');
      playerIcons[1].classList.remove('theme-cat');
      playerSelectedAvatar = target;
    } else if (target.classList.contains('fa-cat-space')) {
      target.classList.add('theme-cat');
      playerIcons[0].classList.remove('theme-astronaut');
      playerSelectedAvatar = target;
    }
    if (target.classList.contains('fa-rocket-launch')) {
      target.classList.add('theme-rocket');
      playerIcons[3].classList.remove('theme-comet');
      playerSelectedMark = target;
    } else if (target.classList.contains('fa-comet')) {
      target.classList.add('theme-comet');
      playerIcons[2].classList.remove('theme-rocket');
      playerSelectedMark = target;
    }
  }
  // ENEMY HUMAN INFO
  const enemy = createPlayer('', '', '', 0);
  const enemyNameInput = document.querySelector('.player-enemy-name');
  const enemyAvatarsTitle = document.querySelector('.enemy-avatar-title');
  const enemyAvatars = document.querySelectorAll('.enemy-avatars i');
  const enemyMarksTitle = document.querySelector('.enemy-mark-title');
  const enemyMarks = document.querySelectorAll('.enemy-marks i');
  let enemySelectedAvatar = '';
  let enemySelectedMark = '';
  // AVATAR & MARK SELECTION
  function selectEnemyIcons(target) {
    const enemyIcons = document.querySelectorAll('#player-enemy i');
    if (target.classList.contains('fa-alicorn')) {
      target.classList.add('theme-alicorn');
      enemyIcons[1].classList.remove('theme-cowboy');
      enemySelectedAvatar = target;
    } else if (target.classList.contains('fa-user-cowboy')) {
      target.classList.add('theme-cowboy');
      enemyIcons[0].classList.remove('theme-alicorn');
      enemySelectedAvatar = target;
    }
    if (target.classList.contains('fa-meteor')) {
      target.classList.add('theme-meteor');
      enemyIcons[3].classList.remove('theme-star');
      enemySelectedMark = target;
    } else if (target.classList.contains('fa-star-shooting')) {
      target.classList.add('theme-star');
      enemyIcons[2].classList.remove('theme-meteor');
      enemySelectedMark = target;
    }
  }

  // ENEMY COMPUTER INFO
  const computerAvatars = document.querySelectorAll('.alien-icon');
  const selectComputerAvatar = computerAvatars[Math.floor(Math.random() * computerAvatars.length)];
  const computerMarks = document.querySelectorAll('.alien-mark-icon');
  const selectComputerMark = computerMarks[Math.floor(Math.random() * computerMarks.length)];
  let computerSelectedAvatar = '';
  let computerSelectedMark = '';
  // AVATAR & MARK SELECTION
  function selectComputerIcons() {
    if (selectComputerAvatar.classList.contains('fa-pastafarianism')) {
      selectComputerAvatar.classList.add('theme-pastafarianism');
    } else if (selectComputerAvatar.classList.contains('fa-alien-monster')) {
      selectComputerAvatar.classList.add('theme-alien');
    }
    computerSelectedAvatar = selectComputerAvatar;
    if (selectComputerMark.classList.contains('fa-bacterium')) {
      selectComputerMark.classList.add('theme-bacterium');
    } else if (selectComputerMark.classList.contains('fa-virus')) {
      selectComputerMark.classList.add('theme-virus');
    }
    computerSelectedMark = selectComputerMark;
  }

  // UPDATE PLAYER OBJECT
  function updatePlayerObj() {
    player.name = playerNameInput.value;
    player.avatar = playerSelectedAvatar;
    player.mark = playerSelectedMark;
  }
  // UPDATE ENEMY OBJECT
  function updateEnemyObj() {
    if (gameMode === 'pvp') { // Enemy info if it is another human
      enemy.name = enemyNameInput.value;
      enemy.avatar = enemySelectedAvatar;
      enemy.mark = enemySelectedMark;
    } else if (gameMode === 'pve') { // Enemy info if it is a computer
      enemy.name = 'Alienzo';
      enemy.avatar = computerSelectedAvatar;
      enemy.mark = computerSelectedMark;
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

  const validateSelections = () => {
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
  };

  // SHOW PLAYERS INFORMATION IN GAME PLAYING WINDOW
  function showPlayersInfo() {
    const playerGameName = document.querySelector('.player-game-name');
    const playerGameAvatar = document.querySelector('.player-game-avatar');
    const playerGameMark = document.querySelector('.player-game-mark');
    const playerGameScore = document.querySelector('.player-game-score');
    playerGameName.textContent = player.name;
    playerGameAvatar.appendChild(playerSelectedAvatar);
    playerGameMark.appendChild(playerSelectedMark);
    playerGameScore.textContent = player.score;
    if (gameMode === 'pvp') {
      const enemyGameName = document.querySelector('.enemy-game-name');
      const enemyGameAvatar = document.querySelector('.enemy-game-avatar');
      const enemyGameMark = document.querySelector('.enemy-game-mark');
      const enemyGameScore = document.querySelector('.enemy-game-score');
      enemyGameName.textContent = enemy.name;
      enemyGameAvatar.appendChild(enemySelectedAvatar);
      enemyGameMark.appendChild(enemySelectedMark);
      enemyGameScore.textContent = enemy.score;
    } else if (gameMode === 'pve') {
      const computerGameAvatar = document.querySelector('.computer-game-avatar');
      const computerGameMark = document.querySelector('.computer-game-mark');
      const computerGameScore = document.querySelector('.computer-game-score');
      const enemyInfo = document.querySelector('#enemy-info');
      const computerInfo = document.querySelector('#computer-info');
      computerGameAvatar.appendChild(computerSelectedAvatar);
      computerGameMark.appendChild(computerSelectedMark);
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
    player,
    updateEnemyObj,
    enemy,
    validateSelections,
    showPlayersInfo,
  };
})();

// PLAYGAME MODULE
const playGame = (() => {
  const generateGameboardGrid = () => {
    const gameboardDiv = document.querySelector('#gameboard-div');
    gameboardDiv.textContent = '';
    for (let i = 0; i < 9; i += 1) {
      const gridDiv = document.createElement('div');
      gameboardDiv.classList.add('grid-3x3');
      gameboardDiv.appendChild(gridDiv);
    }
  };

  const selectGridDiv = () => {
    const allGridDivs = document.querySelectorAll('#gameboard-div > div');
    allGridDivs.forEach((div) => {
      div.addEventListener('click', () => {
        div.style.backgroundColor = '#9370DB';
      });
    });
  };

  const listenButtonsClicks = () => {
    const gameButtons = document.querySelectorAll('button');
    gameButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.classList.contains('play-btn')) {
          newGame.validateSelections();
          newGame.updatePlayerObj();
          newGame.updateEnemyObj();
          newGame.showPlayersInfo();
        } else if (button.classList.contains('new-game')) {
          window.location.reload();
        } else if (button.classList.contains('next-round')) {
          console.log('next round');
        }
      });
    });
  };
  generateGameboardGrid();
  selectGridDiv();
  listenButtonsClicks();
  return {};
})();
