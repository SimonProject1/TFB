TFB 2011 Liga V6.4.3 - Player Card Runtime Fix

Ursache:
Die rangabhängige Kartenwahl rief rankForPlayer() auf. Diese Funktion existiert nicht. Die vorhandene Rangfunktion heißt playerRank(). Deshalb brach renderProfile() beim Anklicken eines Spielers ab, bevor die Player Card aufgebaut werden konnte.

Behoben:
- rankForPlayer() durch playerRank() ersetzt.
- CSS-Klasse des großen Rangabzeichens auf die tatsächlich erzeugte Klasse rank-avatar-large korrigiert.
- alle neun Rang-Artworks bleiben enthalten.
- Versions- und Cachekennung auf 6.4.3 erhöht.

Installation:
Alle Hauptdateien ersetzen und den kompletten Ordner assets/player-card übernehmen. Danach Strg+F5 drücken.
