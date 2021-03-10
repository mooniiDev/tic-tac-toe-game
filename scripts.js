const newGame = (() => {
  const selectGameType = () => {
    const gameSelection = document.querySelectorAll('#game-selection button');
    const pvpMode = document.querySelector('#enemy-human');
    const pveMode = document.querySelector('#enemy-ai');
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
  const selectAvatar = () => {
    const avatars = document.querySelectorAll('.character i');
    avatars.forEach((avatar) => {
      avatar.addEventListener('click', () => {
        if (avatar.classList.contains('fa-user-astronaut')) {
          avatar.classList.add('theme-astronaut');
          avatars[1].classList.remove('theme-cat');
        } else if (avatar.classList.contains('fa-cat-space')) {
          avatar.classList.add('theme-cat');
          avatars[0].classList.remove('theme-astronaut');
        } else if (avatar.classList.contains('fa-alicorn')) {
          avatar.classList.add('theme-alicorn');
          avatars[3].classList.remove('theme-cowboy');
        } else if (avatar.classList.contains('fa-user-cowboy')) {
          avatar.classList.add('theme-cowboy');
          avatars[2].classList.remove('theme-alicorn');
        }
      });
    });
  };
  const selectMark = () => {
    const marks = document.querySelectorAll('.mark i');
    marks.forEach((mark) => {
      mark.addEventListener('click', () => {
        if (mark.classList.contains('fa-rocket-launch')) {
          mark.classList.add('theme-rocket');
          marks[1].classList.remove('theme-comet');
        } else if (mark.classList.contains('fa-comet')) {
          mark.classList.add('theme-comet');
          marks[0].classList.remove('theme-rocket');
        } else if (mark.classList.contains('fa-meteor')) {
          mark.classList.add('theme-meteor');
          marks[3].classList.remove('theme-star');
        } else if (mark.classList.contains('fa-star-shooting')) {
          mark.classList.add('theme-star');
          marks[2].classList.remove('theme-meteor');
        }
      });
    });
  };
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
  const computerSelection = () => {
    const aiAvatars = document.querySelectorAll('#enemy-ai .character i');
    const selectAiAvatar = aiAvatars[Math.floor(Math.random() * aiAvatars.length)];
    if (selectAiAvatar.classList.contains('fa-pastafarianism')) {
      selectAiAvatar.classList.add('theme-pastafarianism');
    } else if (selectAiAvatar.classList.contains('fa-alien-monster')) {
      selectAiAvatar.classList.add('theme-alien');
    }
    const aiMarks = document.querySelectorAll('#enemy-ai .mark i');
    const selectAiMark = aiMarks[Math.floor(Math.random() * aiMarks.length)];
    if (selectAiMark.classList.contains('fa-bacterium')) {
      selectAiMark.classList.add('theme-bacterium');
    } else if (selectAiMark.classList.contains('fa-virus')) {
      selectAiMark.classList.add('theme-virus');
    }
  };
  const startPlay = () => {
    const playBtn = document.querySelector('.play-btn');
    const gameSelectionWindow = document.querySelector('#game-selection-window');
    const gameWindow = document.querySelector('#game-window');
    playBtn.addEventListener('click', () => {
      gameSelectionWindow.className = 'display-none';
      gameWindow.className = 'display-block';
    });
  };
  selectGameType();
  selectAvatar();
  selectMark();
  selectGalaxy();
  computerSelection();
  startPlay();
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
