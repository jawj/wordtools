import m from 'mithril';

interface NavAttrs {
  page: 'pattern' | 'anagram';
}

function conditionalLink(text: string, href?: string | boolean | undefined) {
  return typeof href === 'string' ?
    m(m.route.Link, { href }, text) :
    m('span.link', text);
}

export function Nav() {
  return {
    view(vnode: m.Vnode<NavAttrs>) {
      return m('.nav',
        conditionalLink('Unknown letters', vnode.attrs.page !== 'pattern' && '/pattern/-/freq/desc/1'),
        m.trust(' &nbsp; | &nbsp; '),
        conditionalLink('Anagrams', vnode.attrs.page !== 'anagram' && '/anagram/-'),
      );
    }
  };
}
