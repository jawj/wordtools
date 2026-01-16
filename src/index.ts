
import m from 'mithril';
import { Pattern } from './Pattern';
import { Anagram } from './Anagram';

m.route(document.getElementById('main')!, '/pattern/-/single/freq/desc/1', {
  '/pattern/:pattern/:list/:order/:direction/:page': Pattern,
  '/anagram/:letters': Anagram,
});

declare global { interface Window { DEV: boolean; } }  // esbuild sets this
if (self.DEV) new EventSource('/esbuild').addEventListener('change', () => location.reload());
