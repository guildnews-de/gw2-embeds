// const findScriptBaseUrl = () => {
//   if (document.getElementById('gw2-embeds-js')) {
//     const script = document.getElementById(
//       'gw2-embeds-js',
//     ) as HTMLScriptElement;
//     return `${script.src.substring(0, script.src.lastIndexOf('/'))}/`;
//   }
//   const scripts = document.getElementsByTagName('script');
//   for (let i = 0; i < scripts.length; i++) {
//     const script = scripts[i];
//     if (script.src.includes('gw2-embeds.js')) {
//       return script.src.replace('gw2-embeds.js', '');
//     }
//   }

//   throw new Error('Could not find gw2-embeds script.');
// };

const init = () => {
  // __webpack_public_path__ = findScriptBaseUrl();
  // document.__publicPath = __webpack_public_path__;

  import('./bootstrap').then((module) => module.default());
};

export default (function setGW2Embed () {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 1);
  }
})();
