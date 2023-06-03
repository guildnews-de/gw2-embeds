function splitComma(str: string) {
  const out: string[] = [];
  const split = str.split(',');
  split.forEach((element) => {
    out.push(element);
  });
  return out;
}

function splitPlus(str: string) {
  const split = str.split('+');
  const out = [parseInt(split[0], 10), parseInt(split[1], 10)];

  return out;
}

export default function idParser(rawIds: string) {
  const parentArray = rawIds.split(';');
  const parentOut: number[] | number[][] | number[][][] = [];
  parentArray.forEach((str, i) => {
    const childOut = [];
    const switchKey = `${str.includes(',')}${str.includes('+')}`;
    switch (switchKey) {
      case 'truefalse': {
        // String containts commas, but no +
        const out = splitComma(str);
        out.forEach(element => {
          childOut.push(parseInt(element,10));
        });
        break;
      }
      case 'falsetrue': {
        // String containts no commas, but +
        childOut.push(splitPlus(str));
        break;
      }
      case 'truetrue': {
        // String contains both
        const split = splitComma(str);
        split.forEach(element => {
          if (element.includes('+')) {
            childOut.push(splitPlus(element));
          } else {
            childOut.push(parseInt(element,10));
          }
        });
        break;
      }
      default: {
        // Default case (contains none, just a number)
        childOut.push(parseInt(str, 10));
        break;
      }
    }
    parentOut[i] = Number(childOut);
  });
  return parentOut;
}
