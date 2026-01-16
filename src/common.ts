import m from 'mithril';
import { stringWithCommas } from './util';
// @ts-ignore
import puff from './puff.svg';

export function waitingMessage(message: string) {
  return [
    m('img', { src: puff, width: 26, height: 26, style: { verticalAlign: 'text-bottom' } }),
    m.trust(` &nbsp; ${message} …`)
  ];
}

export function credits(dictionarySize: number, extra = '') {
  return m('.credits', m.trust(`We use a dictionary of ${stringWithCommas(dictionarySize)} names and English words derived from 
    <a href="http://aspell.net/">aspell</a>,
    <a href="http://web.mit.edu/freebsd/head/share/dict/">web2</a>,
    <a href="https://en.wikpedia.org">Wikipedia</a> and
    <a href="https://web.archive.org/web/20230401195411/https://crr.ugent.be/archives/2045">Brysbaert et al</a>.
    Many of these aren't valid in word games.` + extra));
}
