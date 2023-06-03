import React from 'react';
import { createRoot } from 'react-dom/client';
import type NodeListOf from 'typescript';
import clsx from 'clsx';
import objectHash from 'object-hash';
import EmbedElement from './shared/embedElement';

import './App.scss';

function App() {
  const embeddables = Array.from(
    document.querySelectorAll(
      'div[data-gw2-embed],span[data-gw2-embed]',
    ) as NodeListOf<EmbedElement>,
  );
  embeddables.forEach((element, index) => {
    const { gw2Embed: embedType = 'error', gw2Size = undefined } =
      element.dataset;

    element.removeAttribute('data-gw2-embed');
    return (
      import(`./reactor/${embedType}`)
        .then(({ default: EmbModul }) => {
          const { dataset } = element;
          const keyHash = objectHash({
            current: embedType,
            number: index,
          }).substring(0, 6);

          const sizeIsSet = typeof element.dataset.gw2Size !== 'undefined';
          if (sizeIsSet) {
            const { gw2Class: cls = undefined } = element.dataset;
            // eslint-disable-next-line no-param-reassign
            element.dataset.gw2Class = clsx(cls, `iconSize_${keyHash}`);
          }
          const root = createRoot(element);
          root.render(
            <React.StrictMode>
              <EmbModul dataset={dataset} key={keyHash} />
              {sizeIsSet ? (
                <style>{`.iconSize_${keyHash} > [class|="Icon"] { 
                  width: ${gw2Size}px; 
                  height: ${gw2Size}px; 
                }
                .iconSize_${keyHash} > span {
                  vertical-align: middle !important;
                }`}</style>
              ) : (
                ''
              )}
            </React.StrictMode>
          );
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err))
    );
  });
}

export default App;
