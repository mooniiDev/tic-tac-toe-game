const newGame = (() => {
  const playerName = document.querySelector('#player input');
  const playerAvatarsTitle = document.querySelector('.player-avatar-title');
  const playerAvatars = document.querySelectorAll('.player-avatars i');
  const playerMarksTitle = document.querySelector('.player-mark-title');
  const playerMarks = document.querySelectorAll('.player-marks i');
  const enemyName = document.querySelector('#player-enemy input');
  const enemyAvatarsTitle = document.querySelector('.enemy-avatar-title');
  const enemyAvatars = document.querySelectorAll('.enemy-avatars i');
  const enemyMarksTitle = document.querySelector('.enemy-mark-title');
  const enemyMarks = document.querySelectorAll('.enemy-marks i');

  // GAME TYPE SELECTION
  const selectGameType = (target) => {
    const pvpMode = document.querySelector('#player-enemy');
    const pveMode = document.querySelector('#player-ai');
    if (target.classList.contains('pvp')) {
      pvpMode.className = 'display-block';
      pveMode.className = 'display-none';
    } else if (target.classList.contains('pve')) {
      pveMode.className = 'display-block';
      pvpMode.className = 'display-none';
    }
  };

  // PLAYER AVATAR & MARK SELECTION
  const selectPlayerIcons = (target) => {
    const playerIcons = document.querySelectorAll('#player i');
    // AVATAR SELECTION
    if (target.classList.contains('fa-user-astronaut')) {
      target.classList.add('theme-astronaut');
      playerIcons[1].classList.remove('theme-cat');
    } else if (target.classList.contains('fa-cat-space')) {
      target.classList.add('theme-cat');
      playerIcons[0].classList.remove('theme-astronaut');
    }
    // MARK SELECTION
    if (target.classList.contains('fa-rocket-launch')) {
      target.classList.add('theme-rocket');
      playerIcons[3].classList.remove('theme-comet');
    } else if (target.classList.contains('fa-comet')) {
      target.classList.add('theme-comet');
      playerIcons[2].classList.remove('theme-rocket');
    }
  };

  // ENEMY AVATAR & MARK SELECTION
  const selectEnemyIcons = (target) => {
    const enemyIcons = document.querySelectorAll('#player-enemy i');
    // AVATAR SELECTION
    if (target.classList.contains('fa-alicorn')) {
      target.classList.add('theme-alicorn');
      enemyIcons[1].classList.remove('theme-cowboy');
    } else if (target.classList.contains('fa-user-cowboy')) {
      target.classList.add('theme-cowboy');
      enemyIcons[0].classList.remove('theme-alicorn');
    }
    // MARK SELECTION
    if (target.classList.contains('fa-meteor')) {
      target.classList.add('theme-meteor');
      enemyIcons[3].classList.remove('theme-star');
    } else if (target.classList.contains('fa-star-shooting')) {
      target.classList.add('theme-star');
      enemyIcons[2].classList.remove('theme-meteor');
    }
  };

  // COMPUTER AVATAR & MARK SELECTIONS
  const computerSelection = () => {
    const aiAvatars = document.querySelectorAll('.alien-icon');
    const selectAiAvatar = aiAvatars[Math.floor(Math.random() * aiAvatars.length)];
    if (selectAiAvatar.classList.contains('fa-pastafarianism')) {
      selectAiAvatar.classList.add('theme-pastafarianism');
    } else if (selectAiAvatar.classList.contains('fa-alien-monster')) {
      selectAiAvatar.classList.add('theme-alien');
    }
    const aiMarks = document.querySelectorAll('.alien-mark-icon');
    const selectAiMark = aiMarks[Math.floor(Math.random() * aiMarks.length)];
    if (selectAiMark.classList.contains('fa-bacterium')) {
      selectAiMark.classList.add('theme-bacterium');
    } else if (selectAiMark.classList.contains('fa-virus')) {
      selectAiMark.classList.add('theme-virus');
    }
  };

  // GALAXY SELECTIONS
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

  // SELECTIONS VALIDATION
  const validateSelections = () => {
    // REMOVE VALIDATION ERRORS
    playerName.classList.remove('input-error');
    playerAvatarsTitle.classList.remove('avatar-error');
    playerMarksTitle.classList.remove('mark-error');
    enemyName.classList.remove('input-error');
    enemyAvatarsTitle.classList.remove('avatar-error');
    enemyMarksTitle.classList.remove('mark-error');
    // PLAYER NAME, AVATAR & MARK VALIDATIONS
    if (playerName.value === '' || playerName.value === 'Your Name') {
      playerName.classList.add('input-error');
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
    const computer = document.querySelector('#player-ai');
    if (computer.classList.contains('display-none')) {
      if (enemyName.value === '' || enemyName.value === 'Enemy Name') {
        enemyName.classList.add('input-error');
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
    if (!playerName.classList.contains('input-error')
    && !playerAvatarsTitle.classList.contains('avatar-error')
    && !playerMarksTitle.classList.contains('mark-error')
    && !enemyName.classList.contains('input-error')
    && !enemyAvatarsTitle.classList.contains('avatar-error')
    && !enemyMarksTitle.classList.contains('mark-error')) {
      const gameSelectionWindow = document.querySelector('#game-selection-window');
      const gameWindow = document.querySelector('#game-window');
      gameSelectionWindow.className = 'display-none';
      gameWindow.className = 'display-block';
    }
  };

  // LISTEN CLICKS
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
        validateSelections();
      }
    });
  };
  computerSelection();
  listenClicks();
  return {};
})();

const playGame = (() => {
  // GAMEBOARD
  const generateGrid = () => {
    const gameboard = document.querySelector('#gameboard');
    gameboard.innerHTML = '';
    for (let i = 0; i < 9; i += 1) {
      const gridDiv = document.createElement('div');
      gameboard.classList.add('grid-3x3');
      gameboard.appendChild(gridDiv);
    }
  };
  generateGrid();
})();
