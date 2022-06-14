import m from 'mithril';

export function Nav() {
  return {
    view: function () {
      return m('.nav',
        m(m.route.Link, { href: '/pattern/-/common/1' }, 'Unknown letters'),
        m.trust(' &nbsp; | &nbsp; '),
        m(m.route.Link, { href: '/anagram' }, 'Anagrams'),
      );
    }
  };
}