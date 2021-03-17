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
  // PLAYER INFO
  const playerNameInput = document.querySelector('.player-name');
  const playerAvatarsTitle = document.querySelector('.player-avatar-title');
  const playerAvatars = document.querySelectorAll('.player-avatars i');
  const playerMarksTitle = document.querySelector('.player-mark-title');
  const playerMarks = document.querySelectorAll('.player-marks i');
  let player;
  let playerName;
  let playerSelectedAvatar;
  let playerSelectedMark;
  // ENEMY INFO
  const enemyNameInput = document.querySelector('.player-enemy-name');
  const enemyAvatarsTitle = document.querySelector('.enemy-avatar-title');
  const enemyAvatars = document.querySelectorAll('.enemy-avatars i');
  const enemyMarksTitle = document.querySelector('.enemy-mark-title');
  const enemyMarks = document.querySelectorAll('.enemy-marks i');
  let enemy;
  let enemyName;
  let enemySelectedAvatar;
  let enemySelectedMark;
  // COMPUTER INFO
  const computerAvatars = document.querySelectorAll('.alien-icon');
  const selectComputerAvatar = computerAvatars[Math.floor(Math.random() * computerAvatars.length)];
  const computerMarks = document.querySelectorAll('.alien-mark-icon');
  const selectComputerMark = computerMarks[Math.floor(Math.random() * computerMarks.length)];
  const computerName = 'Alienzo';
  let computer;
  let computerSelectedAvatar;
  let computerSelectedMark;
  // GAME MODES
  const pvpMode = document.querySelector('#player-enemy');
  const pveMode = document.querySelector('#player-computer');
  let gameMode = 'pvp';

  const selectGameType = (target) => {
    if (target.classList.contains('pvp')) {
      pvpMode.className = 'display-block';
      pveMode.className = 'display-none';
      gameMode = 'pvp';
    } else if (target.classList.contains('pve')) {
      pveMode.className = 'display-block';
      pvpMode.className = 'display-none';
      gameMode = 'pve';
    }
  };

  const selectPlayerIcons = (target) => {
    const playerIcons = document.querySelectorAll('#player i');
    // AVATAR SELECTION
    if (target.classList.contains('fa-user-astronaut')) {
      target.classList.add('theme-astronaut');
      playerIcons[1].classList.remove('theme-cat');
      playerSelectedAvatar = target;
    } else if (target.classList.contains('fa-cat-space')) {
      target.classList.add('theme-cat');
      playerIcons[0].classList.remove('theme-astronaut');
      playerSelectedAvatar = target;
    }
    // MARK SELECTION
    if (target.classList.contains('fa-rocket-launch')) {
      target.classList.add('theme-rocket');
      playerIcons[3].classList.remove('theme-comet');
      playerSelectedMark = target;
    } else if (target.classList.contains('fa-comet')) {
      target.classList.add('theme-comet');
      playerIcons[2].classList.remove('theme-rocket');
      playerSelectedMark = target;
    }
  };

  const selectEnemyIcons = (target) => {
    const enemyIcons = document.querySelectorAll('#player-enemy i');
    // AVATAR SELECTION
    if (target.classList.contains('fa-alicorn')) {
      target.classList.add('theme-alicorn');
      enemyIcons[1].classList.remove('theme-cowboy');
      enemySelectedAvatar = target;
    } else if (target.classList.contains('fa-user-cowboy')) {
      target.classList.add('theme-cowboy');
      enemyIcons[0].classList.remove('theme-alicorn');
      enemySelectedAvatar = target;
    }
    // MARK SELECTION
    if (target.classList.contains('fa-meteor')) {
      target.classList.add('theme-meteor');
      enemyIcons[3].classList.remove('theme-star');
      enemySelectedMark = target;
    } else if (target.classList.contains('fa-star-shooting')) {
      target.classList.add('theme-star');
      enemyIcons[2].classList.remove('theme-meteor');
      enemySelectedMark = target;
    }
  };

  const selectComputerIcons = () => {
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
  };

  const selectGalaxy = (target) => {
    const gameBody = document.querySelector('#body');
    gameBody.classList.remove('body-bg', 'andromeda', 'black-eye', 'fireworks', 'milky-way');
    if (target.id === 'andromeda') {
      gameBody.classList.add('andromeda');
    } else if (target.id === 'black-eye') {
      gameBody.classList.add('black-eye');
    } else if (target.id === 'fireworks') {
      gameBody.classList.add('fireworks');
    } else if (target.id === 'milky-way') {
      gameBody.classList.add('milky-way');
    }
  };

  const validateSelections = () => {
    // REMOVE VALIDATION ERRORS
    playerNameInput.classList.remove('input-error');
    playerAvatarsTitle.classList.remove('avatar-error');
    playerMarksTitle.classList.remove('mark-error');
    enemyNameInput.classList.remove('input-error');
    enemyAvatarsTitle.classList.remove('avatar-error');
    enemyMarksTitle.classList.remove('mark-error');
    // PLAYER NAME, AVATAR & MARK VALIDATIONS
    if (playerNameInput.value === '' || playerNameInput.value === 'Your Name') {
      playerNameInput.classList.add('input-error');
    } else {
      playerName = playerNameInput.value;
    }
    if (!playerAvatars[0].classList.contains('theme-astronaut')
      && !playerAvatars[1].classList.contains('theme-cat')) {
      playerAvatarsTitle.classList.add('avatar-error');
    }
    if (!playerMarks[0].classList.contains('theme-rocket')
      && !playerMarks[1].classList.contains('theme-comet')) {
      playerMarksTitle.classList.add('mark-error');
    }
    // ENEMY NAME, AVATAR & MARK VALIDATIONS IF PVP MODE IS ACTIVE
    const computerBlock = document.querySelector('#player-computer');
    if (computerBlock.classList.contains('display-none')) {
      if (enemyNameInput.value === '' || enemyNameInput.value === 'Enemy Name') {
        enemyNameInput.classList.add('input-error');
      } else {
        enemyName = enemyNameInput.value;
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
      return true;
    }
    return false;
  };

  // CREATE PLAYER & ENEMY/COMPUTER OBJECTS + SHOW THEIR INFORMATION IN GAME PLAYING WINDOW
  const createPlayers = () => {
    // PLAYER
    player = createPlayer(playerName, playerSelectedAvatar, playerSelectedMark, 0);
    const playerGameName = document.querySelector('.player-game-name');
    const playerAvatarTitle = document.querySelector('.your-avatar');
    const playerGameAvatar = document.querySelector('.player-game-avatar');
    const playerMarkTitle = document.querySelector('.your-mark');
    const playerGameMark = document.querySelector('.player-game-mark');
    const playerScoreTitle = document.querySelector('.your-score');
    const playerGameScore = document.querySelector('.player-game-score');
    playerGameName.textContent = player.name;
    playerAvatarTitle.textContent = `${player.name} Avatar`;
    playerGameAvatar.appendChild(playerSelectedAvatar);
    playerMarkTitle.textContent = `${player.name} Mark`;
    playerGameMark.appendChild(playerSelectedMark);
    playerScoreTitle.textContent = `${player.name} Score`;
    playerGameScore.textContent = player.score;
    if (gameMode === 'pvp') {
      // ENEMY
      enemy = createPlayer(enemyName, enemySelectedAvatar, enemySelectedMark, 0);
      const enemyGameName = document.querySelector('.enemy-game-name');
      const enemyAvatarTitle = document.querySelector('.enemy-avatar');
      const enemyGameAvatar = document.querySelector('.enemy-game-avatar');
      const enemyMarkTitle = document.querySelector('.enemy-mark');
      const enemyGameMark = document.querySelector('.enemy-game-mark');
      const enemyScoreTitle = document.querySelector('.enemy-score');
      const enemyGameScore = document.querySelector('.enemy-game-score');
      enemyGameName.textContent = enemy.name;
      enemyAvatarTitle.textContent = `${enemy.name} Avatar`;
      enemyGameAvatar.appendChild(enemySelectedAvatar);
      enemyMarkTitle.textContent = `${enemy.name} Mark`;
      enemyGameMark.appendChild(enemySelectedMark);
      enemyScoreTitle.textContent = `${enemy.name} Score`;
      enemyGameScore.textContent = enemy.score;
    } else if (gameMode === 'pve') {
      // COMPUTER
      computer = createPlayer(computerName, computerSelectedAvatar, computerSelectedMark, 0);
      const computerGameAvatar = document.querySelector('.computer-game-avatar');
      const computerGameMark = document.querySelector('.computer-game-mark');
      const computerGameScore = document.querySelector('.computer-game-score');
      const enemyInfo = document.querySelector('#enemy-info');
      const computerInfo = document.querySelector('#computer-info');
      computerGameAvatar.appendChild(computerSelectedAvatar);
      computerGameMark.appendChild(computerSelectedMark);
      computerGameScore.textContent = computer.score;
      computerInfo.className = 'display-block';
      enemyInfo.className = 'display-none';
    }
  };

  const listenClicks = () => {
    const main = document.querySelector('main');
    main.addEventListener('click', (event) => {
      const { target } = event;
      if (target.classList.contains('game-type')) {
        selectGameType(target);
      } else if (target.classList.contains('player-icon')) {
        selectPlayerIcons(target);
      } else if (target.classList.contains('enemy-icon')) {
        selectEnemyIcons(target);
      } else if (target.classList.contains('galaxy')) {
        selectGalaxy(target);
      } else if (target.classList.contains('play-btn')) {
        // IF VALIDATION FUNCTION PASSES CREATE PLAYERS OBJECTS
        if (validateSelections()) {
          createPlayers();
        }
      }
    });
  };
  selectComputerIcons();
  listenClicks();
  return {};
})();

// GAME PLAYING MODULE
const playGame = (() => {
  const generateGameboardGrid = () => {
    const gameboard = document.querySelector('#gameboard');
    gameboard.innerHTML = '';
    for (let i = 0; i < 9; i += 1) {
      const gridDiv = document.createElement('div');
      gameboard.classList.add('grid-3x3');
      gameboard.appendChild(gridDiv);
    }
  };
  generateGameboardGrid();
  return {};
})();
