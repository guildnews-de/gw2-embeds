const init = () => {
  import('./bootstrap').then((module) => module.default());
};

export default (function setGW2Embed() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 1);
  }
})();
