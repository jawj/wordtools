# wget https://kaikki.org/dictionary/English/kaikki.org-dictionary-English.jsonl
# python3.14 /Users/george/Development/wordtools/src/words/kaikki.py < kaikki.org-dictionary-English.jsonl > multiwords.txt

import json
import sys
import re

prev_word = None
for line in sys.stdin:
  entry = json.loads(line)
  pos = entry.get('pos', '')
  word = entry.get('word', '')
  if (' ' in word or '-' in word) and entry.get('lang') == 'English' and not re.search(r'\d', word) and word != prev_word:
    pos = entry.get('pos', '')
    if pos not in ['prefix', 'suffix']:
      print(word)
  prev_word = word
