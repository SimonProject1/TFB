# TFB 2011 Liga - Projekt- und Copilot-Uebergabe

> Diese Datei gehoert dauerhaft in das Hauptverzeichnis des GitHub-Repositories.  
> Bei einem neuen Copilot-Chat diese Datei zusammen mit den aktuellen produktiven Dateien bereitstellen.  
> Die Datei dokumentiert den verbindlichen Projektstand, ersetzt aber kein Daten-Backup der laufenden Liga.

## 1. Projektziel

Die TFB 2011 Liga ist eine lokal nutzbare, installierbare Progressive Web App fuer die Verwaltung einer Tischfussball-Vereinsliga.

Die produktive App soll:

- auf einem einzelnen Windows-PC laufen,
- als installierte Web-App ueber ein eigenes App-Symbol startbar sein,
- nach einmaligem Online-Laden vollstaendig offline funktionieren,
- alle Grafiken und Artworks offline anzeigen,
- Spieler, Spiele, Ergebnisse, Tabellen, Saisons, Archiv und Auszeichnungen lokal verwalten,
- bestehende Daten bei Updates behalten,
- spaeter parallel als eigenstaendige Tauri-Windows-App V7.x weiterentwickelt werden.

## 2. Aktueller verbindlicher Stand

- Produktive Web-App-Version: **V6.6.3**
- Letzte Aenderung: optimierte Ergebniseingabe plus Offline-Cache
- Service-Worker-Cache: **tfb-2011-v6.6.3**
- PWA-Startpfad: **./index.html**
- GitHub-Hauptverzeichnis enthaelt nur produktive Dateien und diese Uebergabedatei.

## 3. Produktive GitHub-Struktur

```text
assets/
app.js
index.html
manifest.json
styles.css
sw.js
README-COPILOT.md
```

Diese Dateien duerfen nicht geloescht werden:

- `assets/`: alle Logos, Navigationselemente, Rangbilder, Medaillen, Tabellen-Artworks und Spielerprofil-Artworks
- `app.js`: komplette Anwendungs-, Tabellen-, Spieler-, Backup- und Ergebnislogik
- `index.html`: App-Struktur und Service-Worker-Registrierung
- `styles.css`: komplette Gestaltung und responsive Regeln
- `manifest.json`: installierbare PWA, Startpfad, Name, Farben und App-Icon
- `sw.js`: Offlinebetrieb und Asset-Cache
- `README-COPILOT.md`: Projektuebergabe fuer neue Chats und neue PCs

Entwicklungsprotokolle wie `TESTS-V*.txt`, alte `README*.txt` und `OFFLINE-ASSET-LIST.txt` gehoeren nicht dauerhaft in den produktiven Root.

## 4. Offlinebetrieb

V6.6.3 verwendet einen Service Worker. Der Service Worker cached:

- `index.html`
- `app.js`
- `styles.css`
- `manifest.json`
- Vereinslogo und Arena
- Navigation-Artworks
- Rang-Artworks
- Tabellen-, Podium- und Startseiten-Artworks
- Medaillen-Artworks
- Player-Card-Corner-Artworks
- Player-Profile-Artworks

Zusaetzliche lokale GET-Assets werden beim ersten erfolgreichen Laden ebenfalls in den Cache aufgenommen.

### Installation oder Update

1. Alle neuen produktiven Dateien nach GitHub hochladen.
2. Bestehende Unterordner in `assets/` nicht versehentlich loeschen.
3. App mit Internetverbindung oeffnen.
4. Kontrollieren, dass unten links die neue Versionsnummer steht.
5. `Strg+F5` druecken.
6. App mindestens 10 Sekunden geoeffnet lassen.
7. App komplett schliessen und erneut oeffnen.
8. Erst danach den Offline-Test durchfuehren.

### Verbindlicher Offline-Abnahmetest

1. Netzwerkverbindung komplett trennen.
2. App ueber das normale installierte TFB-App-Symbol starten.
3. Startseite, Spieler, Spiele, Tabellen, Archiv und Einstellungen oeffnen.
4. Pruefen, ob alle Artworks angezeigt werden.
5. Offline ein Testspiel und ein Ergebnis speichern.
6. App komplett schliessen.
7. App weiterhin offline neu starten.
8. Pruefen, ob das Ergebnis erhalten geblieben ist.

Eine reine Offline-Anzeige reicht nicht. Lesen, Schreiben, Speichern und erneutes Laden muessen offline funktionieren.

## 5. Ergebniseingabe V6.6.3

Die Auswahl ist bewusst spiegelbildlich angeordnet:

```text
Links:  0  1  2   :   2  1  0  Rechts
```

Automatische Gegenauswahl:

- links `0` setzt rechts `2`
- links `1` setzt rechts `2`
- links `2` setzt rechts `0`
- rechts `0` setzt links `2`
- rechts `1` setzt links `2`
- rechts `2` setzt links `0`

Gueltige Endergebnisse bleiben:

- `2:0`
- `2:1`
- `0:2`
- `1:2`

## 6. Spielerbereich und Design

Der Spielerbereich verwendet ein modulares Gunmetal-Design. Keine grosse Player-Card-Hintergrundgrafik darf auf variable Breiten gestreckt werden.

Verbindliche Prinzipien:

- responsive CSS-Grundkarte
- separate quadratische Eck-Artworks
- runde Rangabzeichen und Medaillenfassungen duerfen niemals oval verzerrt werden
- Rangabzeichen links
- dynamischer Name, Rangfortschritt und Kennzahlen in der Mitte
- drei hervorgehobene Medaillen rechts
- Bearbeiten-Schaltflaeche darf kein Artwork ueberdecken
- dunkle interne Scrollbalken
- in der Spieleransicht scrollt bei normaler Desktophoehe nur der interne Bereich, nicht zusaetzlich die ganze Webseite

Vorhandene Profilregister:

- Uebersicht
- Statistik
- Medaillen
- Saisonchronik

Die persoenliche Medaillenvitrine soll nur tatsaechlich freigeschaltete Medaillen zeigen. Nicht erreichte Medaillen werden dort nicht als kompletter Katalog angezeigt.

## 7. Artworks und Dateiorganisation

Wichtige Asset-Gruppen:

```text
assets/navigation/
assets/ranks/
assets/medals/
assets/table-awards/
assets/player-card-corners/
assets/player-profile/
```

Gestaltungsstil:

- dunkles Gunmetal
- sichtbare Metallstaerke
- gebuerstete Metalloberflaechen
- polierte Kanten
- rote Emaille-Akzente
- Gold, Silber und Bronze fuer regulaere Auszeichnungen
- Platin nur fuer besondere Auszeichnungen
- transparente PNG-Hintergruende

Artworks sollen als einzelne Dateien pruefbar sein und nicht unnoetig in grosse, starre Hintergrundbilder eingebaut werden.

## 8. Medaillensystem - geplante Erweiterungen

Geplant sind zusaetzliche Saison- und Ereignismedaillen.

Beispiel Ostermedaille 2027:

- Vergabe an Spieler mit mindestens einem bestaetigten Spiel am definierten Dienstag vor oder nach Ostern 2027
- eigene Medaillen-ID und Jahreszahl
- Verleihung muss mit Spieler-ID, Saison-ID, Freischaltdatum, ausloesendem Spiel und Regelversion nachvollziehbar sein

Geplante Kategorien:

- Leistung
- Teilnahme
- Saison
- Ereignis
- besondere Platin-Auszeichnung

Historische Medaillen sollen spaeter aus vorhandenen Begegnungen berechnet werden, ohne archivierte Saisondaten zu veraendern.

## 9. Archiv - geplante Erweiterung

Das Archiv soll spaeter wie ein Trophäenschrank gestaltet werden:

- Saisonplaketten
- Gesamt-, Einzel- und Doppelmeister
- Abschlusstabellen
- Saisonrekorde
- Teilnehmer und Saisonmedaillen
- chronologische Saisonhistorie

Archivierte Begegnungen und Tabellen duerfen durch das Loeschen oder Deaktivieren eines Spielers niemals nachtraeglich veraendert werden.

## 10. Datenintegritaet

Verbindliche Regeln:

- Spieler mit aktiven oder archivierten Begegnungen werden nur deaktiviert, nicht physisch geloescht.
- Endgueltiges Loeschen ist nur erlaubt, wenn kein Match auf den Spieler verweist.
- Backups muessen vor Import validiert werden.
- Backups mit Feststatistiken und gleichzeitig enthaltenen Begegnungen duerfen keine Doppelzaehlung erzeugen.
- Popups fuer kritische Aktionen sollen nicht durch versehentlichen Hintergrundklick geschlossen werden.
- Historische Saisons bleiben unveraendert.

## 11. Passwoerter im aktuellen Projektstand

- Entwicklerbereich / ELO: **0156**
- kritische Admin-Aktionen wie Backup, Loeschen und Wiederherstellung: **3140**

Hinweis: Die Passwoerter liegen in der clientseitigen Anwendung und sind daher kein Schutz gegen Personen mit Zugriff auf den Quellcode. Fuer den lokalen Vereinsbetrieb dienen sie als Bedien- und Fehlerschutz.

## 12. Versionsregeln

Web-App:

- aktuelle Linie: V6.x
- kleine Fehlerkorrektur: Patch-Version erhoehen, zum Beispiel V6.6.3 auf V6.6.4
- groesserer abgeschlossener Funktionsblock: Minor-Version erhoehen
- niemals eine neue Versionsnummer vergeben, wenn die Aenderung noch nicht umgesetzt und geprueft wurde

Desktop-App:

- separate Linie: V7.x mit Tauri
- Ausgangsbasis war Web-App V6.3.3
- Desktop-App und Web-App werden getrennt weiterentwickelt
- Aenderungen wandern nicht automatisch zwischen beiden Linien

## 13. Desktop-App V7.x

Parallel existiert ein Tauri-Projekt fuer eine echte Windows-App.

Ziel:

- eigene EXE und Setup-EXE
- keine Webadresse zur Laufzeit
- vollstaendig offline
- lokale Dateispeicherung oder spaeter SQLite
- automatische Backups
- Datenuebernahme aus der Web-App

Nur der Entwicklungs-PC benoetigt Node.js, Rust, Microsoft Visual Studio Build Tools und WebView2. Der Ziel-PC soll spaeter nur die fertige TFB-App installieren.

## 14. Backup bei neuem PC

GitHub enthaelt die App und alle statischen Artworks, aber nicht automatisch die produktiven Liga-Daten aus dem Browser-Speicher.

Vor einem PC-Wechsel deshalb zwingend:

1. In der TFB-App ein vollstaendiges Backup exportieren.
2. Backup-Datei extern sichern, beispielsweise USB-Stick oder Netzwerkordner.
3. Repository von GitHub auf dem neuen PC bereitstellen oder die PWA neu installieren.
4. App einmal online vollstaendig laden und den Offline-Cache aufbauen.
5. Das exportierte Liga-Backup in der App wiederherstellen.
6. Tabellen, Spieler, Archiv und Medaillen kontrollieren.
7. Abschliessend einen Offline-Test durchfuehren.

GitHub allein ersetzt kein Backup von LocalStorage oder anderen lokal gespeicherten Ligadaten.

## 15. Starttext fuer einen neuen Copilot-Chat

```text
Wir entwickeln die TFB 2011 Liga Web-App weiter. Bitte lies zuerst die Datei README-COPILOT.md aus dem GitHub-Hauptverzeichnis und behandle sie als verbindliche Projektuebergabe. Der aktuelle produktive Stand ist V6.6.3. Aendere nichts an der Datenstruktur, dem Offline-Service-Worker oder den produktiven Assets, ohne die Auswirkungen auf bestehende Liga-Daten, Backups und Offlinebetrieb zu pruefen. Erstelle neue Versionen erst nach Umsetzung und Tests. Produktive GitHub-Dateien und Entwicklungs-/Testdateien muessen getrennt bleiben.
```

## 16. Checkliste vor jeder neuen Auslieferung

- Versionsnummer in `app.js`, `index.html`, `manifest.json` und Cache-Version abgestimmt
- JavaScript-Syntax geprueft
- Service-Worker-Syntax geprueft
- alle referenzierten Assets vorhanden
- keine Produktivdatei versehentlich geloescht
- bestehende Datenstruktur kompatibel
- Backup-Import weiterhin moeglich
- Offline-App-Shell und Artworks gecacht
- Online-Update einmal geladen
- anschliessender Offline-Start getestet
- ZIP-Integritaet geprueft
- GitHub-Paket enthaelt nur Produktivdateien plus `README-COPILOT.md`
