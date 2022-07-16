import React from 'react';
import ReactDOM from 'react-dom';
import type NodeListOf from 'typescript';
import clsx from 'clsx';
import EmbedElement from './shared/embedElement';

import '@discretize/typeface-menomonia/index.css';
import '@discretize/gw2-ui-new/dist/default_style.css';
import '@discretize/gw2-ui-new/dist/index.css';
import './style.css';

function bootstrap() {
  const embeddables = Array.from(
    document.querySelectorAll(
      'div[data-gw2-embed],span[data-gw2-embed]',
    ) as NodeListOf<EmbedElement>,
  );
  embeddables.forEach((element, index) => {
    const { gw2Embed: embedType = 'error' } = element.dataset;
    if (element.dataset.gw2Size) {
      const { gw2Class: cls = undefined } = element.dataset;
      // eslint-disable-next-line no-param-reassign
      element.dataset.gw2Class = clsx(cls, 'largeIcon');
    }
    element.removeAttribute('data-gw2-embed');
    return (
      import(`./reactor/${embedType}`)
        .then(({ default: EmbModul }) => {
          const { dataset } = element;
          const key = `${index}${embedType}`;
          ReactDOM.render(
            <React.StrictMode>
              <EmbModul dataset={dataset} key={key} />
            </React.StrictMode>,
            element,
          );
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err))
    );
  });
}

export default bootstrap;
