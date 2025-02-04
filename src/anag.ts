
type Letters = [string[], number[]];
type Sides = [string, string][];

const toLetters = (s: string) => s.split('').sort().reduce((memo, x) => {
  if (memo[0][0] === x) memo[1][0]++;
  else {
    memo[0].unshift(x);
    memo[1].unshift(1);
  }
  return memo;
}, [[], []] as Letters);

/**
 * The Allocation data structure tracks every unique combination of letters.
 * It's a Uint32Array. Each unique letter is represented by one array item.
 * For each item, the high 16 bits record how many of that letter is available.
 * The low 16 bits record how many of that letter is currently allocated to a
 * specific side. The last item records how many combinations have been 
 * produced, and the next-to-last records how many unique combinations exist.
 */

function createAllocation(maxValues: number[]) {
  const len = maxValues.length;
  const mb = new Uint32Array(len + 2);
  let product = 1, i = 0;
  for (; i < len; i++) {
    const max = maxValues[i];
    mb[i] = max << 16;
    product *= (max + 1);
  }
  mb[i] = Math.ceil(product / 2);
  return mb;
}

function nextAllocation(mb: Uint32Array, debug = false) {
  const len = mb.length - 2;
  const stop = mb[len];
  const total = ++mb[len + 1];
  for (let i = 0; i < len; i++) {
    const col = mb[i];
    const max = col >>> 16;
    const v = (col & 0xffff) + 1; // increment value
    if (debug && i === len - 1) console.log('---');
    if (v <= max) {
      mb[i] = (max << 16) | v;
      if (debug) {
        if (total === stop) console.log('===');
        return true;
      }
      return total < stop;
    }
    mb[i] = max << 16;  // v is implicitly zero 
  }
  if (debug) return false;
  throw new Error('If we get here, we will have seen every combination twice');
}

function* splits(s: string) {
  var [letters, counts] = toLetters(s);
  var mb = createAllocation(counts);
  const len = letters.length;
  do {
    let s1 = '', s2 = '';
    for (let i = 0; i < len; i++) {
      const letter = letters[i];
      const col = mb[i];
      const max = col >>> 16;
      let v = col & 0xffff;
      s1 += letter.repeat(v);
      s2 += letter.repeat(max - v);
    }
    yield [s1, s2];
  } while (nextAllocation(mb));
}

let i = 0;
for (const [s1, s2] of splits('george')) console.log(++i, s1, s2);
