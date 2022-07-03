import React from 'react';
import ReactDOM from 'react-dom';
import type NodeListOf from 'typescript';
import EmbedElement from './shared/embedElement';

import '@discretize/typeface-menomonia/index.css';
import '@discretize/gw2-ui-new/dist/default_style.css'
import '@discretize/gw2-ui-new/dist/index.css'

function bootstrap() {
  const embeddables = Array.from(
    document.querySelectorAll(
      'div[data-gw2-embed]',
    ) as NodeListOf<EmbedElement>,
  );
  embeddables.forEach((element, index) => {
    const { gw2Embed: embedType = 'error' } = element.dataset;

    element.removeAttribute('data-gw2-embed');
    return import(`./reactor/${embedType}`)
      .then(({ default: EmbModul }) => {
        const { dataset } = element;
        const key = `${embedType}${index}`;
        ReactDOM.render(
          <React.StrictMode>
            <EmbModul dataset={dataset} key={key} />,
          </React.StrictMode>,
          element,
        );
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  });
}

export default bootstrap;
