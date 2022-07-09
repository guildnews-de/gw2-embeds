export default function idParser(rawIds: string) {
  const parentArray = rawIds.split(';');
  const parentOut: (number | (number | number[])[])[] = [];
  parentArray.forEach((str, i) => {
    const check = parseInt(str, 10);
    if (Number.isInteger(check)) {
      parentOut[i] = check;
    } else if (str.includes(',')) {
      const subArray = str.split(',');
      const subOut: (number | number[])[] = [];
      subArray.forEach((str2, j) => {
        const check2 = parseInt(str2, 10);
        if (Number.isInteger(check2)) {
          subOut[j] = check2;
        } else if (str2.includes('+')) {
          const finArray = str2.split('+');
          const finOut: number[] = [];
          finArray.forEach((str3, k) => {
            const check3 = parseInt(str3, 10);
            if (Number.isInteger(check3)) {
              finOut[k] = check3;
            }
          });
          subOut[j] = finOut;
        }
      });
      parentOut[i] = subOut;
    }
  });
  return parentOut;
}
