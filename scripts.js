const newGame = (() => {
  // GAME TYPE SELECTION
  const selectGameType = () => {
    const gameSelection = document.querySelectorAll('#game-type button');
    const pvpMode = document.querySelector('#player-enemy');
    const pveMode = document.querySelector('#player-ai');
    gameSelection.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('pvp')) {
          pvpMode.className = 'display-block';
          pveMode.className = 'display-none';
        } else if (btn.classList.contains('pve')) {
          pveMode.className = 'display-block';
          pvpMode.className = 'display-none';
        }
      });
    });
  };

  // PLAYER AVATAR/MARK & ENEMY AVATAR/MARK SELECTIONS
  const selectIcons = () => {
    const gameOptionsWindow = document.querySelector('#game-options');
    const playerIcons = document.querySelectorAll('#player i');
    const enemyIcons = document.querySelectorAll('#player-enemy i');
    gameOptionsWindow.addEventListener('click', (event) => {
      const { target } = event;
      // PLAYER AVATAR SELECTION
      if (target.classList.contains('fa-user-astronaut')) {
        target.classList.add('theme-astronaut');
        playerIcons[1].classList.remove('theme-cat');
      } else if (target.classList.contains('fa-cat-space')) {
        target.classList.add('theme-cat');
        playerIcons[0].classList.remove('theme-astronaut');
      }
      // PLAYER MARK SELECTION
      if (target.classList.contains('fa-rocket-launch')) {
        target.classList.add('theme-rocket');
        playerIcons[3].classList.remove('theme-comet');
      } else if (target.classList.contains('fa-comet')) {
        target.classList.add('theme-comet');
        playerIcons[2].classList.remove('theme-rocket');
      }
      // ENEMY AVATAR SELECTION
      if (target.classList.contains('fa-alicorn')) {
        target.classList.add('theme-alicorn');
        enemyIcons[1].classList.remove('theme-cowboy');
      } else if (target.classList.contains('fa-user-cowboy')) {
        target.classList.add('theme-cowboy');
        enemyIcons[0].classList.remove('theme-alicorn');
      }
      // ENEMY MARK SELECTION
      if (target.classList.contains('fa-meteor')) {
        target.classList.add('theme-meteor');
        enemyIcons[3].classList.remove('theme-star');
      } else if (target.classList.contains('fa-star-shooting')) {
        target.classList.add('theme-star');
        enemyIcons[2].classList.remove('theme-meteor');
      }
    });
  };
  selectIcons();

  // COMPUTER AVATAR AND MARK SELECTION
  const computerSelection = () => {
    const aiAvatars = document.querySelectorAll('#player-ai .player i');
    const selectAiAvatar = aiAvatars[Math.floor(Math.random() * aiAvatars.length)];
    if (selectAiAvatar.classList.contains('fa-pastafarianism')) {
      selectAiAvatar.classList.add('theme-pastafarianism');
    } else if (selectAiAvatar.classList.contains('fa-alien-monster')) {
      selectAiAvatar.classList.add('theme-alien');
    }
    const aiMarks = document.querySelectorAll('#player-ai .marks i');
    const selectAiMark = aiMarks[Math.floor(Math.random() * aiMarks.length)];
    if (selectAiMark.classList.contains('fa-bacterium')) {
      selectAiMark.classList.add('theme-bacterium');
    } else if (selectAiMark.classList.contains('fa-virus')) {
      selectAiMark.classList.add('theme-virus');
    }
  };

  // GALAXY SELECTION
  const selectGalaxy = () => {
    const galaxies = document.querySelectorAll('.galaxy');
    const gameBody = document.querySelector('#body');
    galaxies.forEach((galaxy) => {
      galaxy.addEventListener('click', () => {
        gameBody.classList.remove('body-bg', 'andromeda', 'black-eye', 'fireworks', 'milky-way');
        if (galaxy.id === 'andromeda') {
          gameBody.classList.add('andromeda');
        } else if (galaxy.id === 'black-eye') {
          gameBody.classList.add('black-eye');
        } else if (galaxy.id === 'fireworks') {
          gameBody.classList.add('fireworks');
        } else if (galaxy.id === 'milky-way') {
          gameBody.classList.add('milky-way');
        }
      });
    });
  };
  selectGameType();
  computerSelection();
  selectGalaxy();
  return {};
})();

const playGame = (() => {
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
