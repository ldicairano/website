#! /bin/bash
cd ~/Documents/GitHub/website

# 1) Vedi tutto quello che è cambiato
git status

# 2) Aggiungi TUTTO (nuovi file, modifiche, cancellazioni)
git add -A

# 3) Ricontrolla che sia tutto “staged”
git status

# 4) Commit
git commit -m "Update site"

# 5) Allinea con GitHub (evita l’errore fetch first)
git pull --rebase origin main

# 6) Push (triggera la build su Pages)
git push
