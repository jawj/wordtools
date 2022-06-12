import m from 'mithril';

export function Nav() {
  return {
    view: function () {
      return m('.nav',
        m('a', {
          href: '#',
          onclick: () => {
            m.route.set('/pattern/-/common/0')
            return false;
          }
        }, 'Unknown letters'),
        m.trust(' &nbsp; | &nbsp; '),
        m('a', {
          href: '#',
          onclick: () => {
            m.route.set('/anagram')
            return false;
          }
        }, 'Anagrams')
      );
    }
  };
}