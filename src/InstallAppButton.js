import { useInstallPrompt } from './installPrompt.js';

export function mountInstallAppButton(container) {
  const { state, isIOS, promptInstall, onChange } = useInstallPrompt();

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'install-app-btn';

  const hint = document.createElement('p');
  hint.className = 'install-app-hint';
  hint.hidden = true;
  hint.textContent = 'En iPhone/iPad: toca Compartir (□↑) y luego "Agregar a inicio".';

  function render() {
    if (state.installed) {
      button.hidden = true;
      hint.hidden = true;
      return;
    }
    if (isIOS()) {
      button.hidden = false;
      button.textContent = '📲 Instalar app';
      hint.hidden = true;
    } else if (state.canInstall) {
      button.hidden = false;
      button.textContent = '📲 Instalar app';
      hint.hidden = true;
    } else {
      button.hidden = true;
      hint.hidden = true;
    }
  }

  button.addEventListener('click', () => {
    if (isIOS()) {
      hint.hidden = !hint.hidden;
    } else {
      promptInstall();
    }
  });

  onChange(render);
  render();

  container.append(button, hint);
}
