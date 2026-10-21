# -*- coding: utf-8 -*-
"""
Generate complete English-Vietnamese vocabulary covering all words in Paper 1 and Paper 2.
"""
import os
import re
import json

base_dir = r"C:\Users\nam\.gemini\antigravity\scratch\telecom-reader"

with open(os.path.join(base_dir, "data_paper1.js"), "r", encoding="utf-8") as f:
    t1 = f.read()
with open(os.path.join(base_dir, "data_paper2.js"), "r", encoding="utf-8") as f:
    t2 = f.read()

# Extract all words
raw_words = set(re.findall(r'\b[a-zA-Z]{2,}\b', t1 + ' ' + t2))
words = sorted(list({w.lower() for w in raw_words}))
print(f"Found {len(words)} unique words to translate.")
