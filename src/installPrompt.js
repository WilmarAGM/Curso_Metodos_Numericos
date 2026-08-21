const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent);

const isStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;

export function useInstallPrompt() {
  let deferredPrompt = null;
  const state = {
    canInstall: false,
    installed: isStandalone(),
  };
  const listeners = new Set();

  const notify = () => listeners.forEach((fn) => fn(state));

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    state.canInstall = true;
    notify();
  });

  window.addEventListener('appinstalled', () => {
    state.installed = true;
    state.canInstall = false;
    deferredPrompt = null;
    notify();
  });

  async function promptInstall() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      state.installed = true;
    }
    state.canInstall = false;
    deferredPrompt = null;
    notify();
  }

  return {
    state,
    isIOS,
    promptInstall,
    onChange(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };
}
