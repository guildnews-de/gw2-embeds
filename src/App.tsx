import loadable from '@loadable/component';
import React from 'react';
import { createRoot } from 'react-dom/client';
import type NodeListOf from 'typescript';
import { MD5 } from 'object-hash';
import {
  EmbedElement,
  EmbedElementData,
  EmbedElementProps,
} from './shared/embedElement';

import './App.scss';

function App() {
  const embeddables = Array.from(
    document.querySelectorAll(
      'div[data-gw2-embed],span[data-gw2-embed]',
    ) as NodeListOf<EmbedElement>,
  );
  embeddables.forEach((element, index) => {
    const elementData = new EmbedElementData(element.dataset);
    // const { type: embedType, size: embedSize } = elementData;
    // const { gw2Embed: embedType = 'error', gw2Size = undefined } =
    //   element.dataset;

    element.removeAttribute('data-gw2-embed');
    const AsyncModul = loadable<EmbedElementProps>(
      (props) => import(`./reactor/${props.type}`),
    );
    const keyHash = MD5({
      ...elementData,
      number: index,
    });
    const root = createRoot(element);
    root.render(
      <React.StrictMode>
        <AsyncModul hash={keyHash} {...elementData} />
      </React.StrictMode>,
    );
    // return (
    //   import(`./reactor/${embedType}`)
    //     .then(({ default: EmbModul }) => {
    //       // const { dataset } = element;
    //       const keyHash = MD5({
    //         ...elementData,
    //         number: index,
    //       }).substring(0, 6);
    //       const root = createRoot(element);
    //       root.render(
    //         <React.StrictMode>
    //           <EmbModul
    //             elementData={elementData}
    //             hash={keyHash}
    //             iconProps={
    //               embedSize > 0
    //                 ? {
    //                     style: {
    //                       fontSize: `${Number(embedSize).toString()}px`,
    //                       verticalAlign: 'middle',
    //                     },
    //                   }
    //                 : undefined
    //             }
    //           />
    //         </React.StrictMode>,
    //       );
    //     })
    //     .catch((err) => console.log(err))
    // );
  });
}

export default App;
