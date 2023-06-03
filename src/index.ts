const init = () => {
  const scripts = document.querySelector('script#gw2embeds');
  if (scripts == null) {
    import('./App').then((module) => module.default());
  }
};

export default (function setGW2Embed() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 1);
  }
})();
