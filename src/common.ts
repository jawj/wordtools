import m from 'mithril';

export function waitingMessage(message: string) {
  return [
    m('img', { src: 'puff.svg', width: 26, height: 26, style: { verticalAlign: 'text-bottom' } }),
    m.trust(` &nbsp; ${message} …`)
  ];
}
