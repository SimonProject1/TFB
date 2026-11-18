TFB 2011 Liga V6.6.2 - Offline-Fix

Neu:
- echter Service Worker mit versionsgebundenem Cache tfb-2011-v6.6.2
- index.html, app.js, styles.css und manifest.json offline
- Vereinslogo und Arena offline
- Navigation, Rang-Artworks, Tabellenführer-Artworks, Medaillen, Player-Card-Ecken und Player-Profile-Artworks werden vorgeladen
- Navigation fällt ohne Netzwerk auf die vollständige lokal gecachte index.html zurück
- neue Assets werden beim ersten Online-Abruf zusätzlich in den Cache aufgenommen
- PWA start_url zeigt explizit auf ./index.html

Wichtig für Installation/Test:
1. sw.js zusammen mit den Hauptdateien ins GitHub-Hauptverzeichnis hochladen.
2. Alle bestehenden assets-Ordner auf GitHub müssen erhalten bleiben.
3. Einmal MIT Internet die Seite öffnen und Strg+F5 drücken.
4. Seite einige Sekunden offen lassen, damit der Service Worker alle vorhandenen Artworks cachen kann.
5. Danach Browser/App schließen, Netzwerk trennen und über das normale TFB-App-Symbol neu starten.
