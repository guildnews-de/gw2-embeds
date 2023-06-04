import React from 'react';
import { createRoot } from 'react-dom/client';
import type NodeListOf from 'typescript';
import objectHash from 'object-hash';
import { EmbedElement } from './shared/embedElement';

import './App.scss';

function App() {
  const embeddables = Array.from(
    document.querySelectorAll(
      'div[data-gw2-embed],span[data-gw2-embed]',
    ) as NodeListOf<EmbedElement>,
  );
  embeddables.forEach((element, index) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { gw2Embed: embedType = 'error', gw2Size = undefined } =
      element.dataset;

    element.removeAttribute('data-gw2-embed');
    return (
      import(`./reactor/${embedType}`)
        .then(({ default: EmbModul }) => {
          const { dataset } = element;
          const keyHash = objectHash({
            ...dataset,
            number: index,
          }).substring(0, 6);
          const root = createRoot(element);
          root.render(
            <React.StrictMode>
              <EmbModul
                dataset={dataset}
                hash={keyHash}
                iconProps={
                  gw2Size
                    ? {
                        style: {
                          fontSize: `${Number(gw2Size)}px`,
                          verticalAlign: 'middle',
                        },
                      }
                    : undefined
                }
              />
            </React.StrictMode>,
          );
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err))
    );
  });
}

export default App;
