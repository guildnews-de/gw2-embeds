export default function idParser(rawIds: string) {
  const parentArray = rawIds.split(';');
  const parentOut: number[] = [];
  parentArray.forEach((str, i) => {
    const check = parseInt(str, 10);
    if (str.includes(',') || str.includes('+')) {
      parentOut[i] = 0;
    } else if (Number.isInteger(check)) {
      parentOut[i] = check;
    }
  });
  return parentOut;
}
