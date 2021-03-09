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
  const startGame = () => {
    const playGame = document.querySelector('.play');
    const gameSelectionWindow = document.querySelector('#game-selection-window');
    const gameWindow = document.querySelector('#game-window');
    playGame.addEventListener('click', () => {
      gameSelectionWindow.style.display = 'none';
      gameWindow.style.display = 'block';
    });
  };
  selectGameType();
  selectGalaxy();
  startGame();
  return {};
})();
