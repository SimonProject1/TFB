const CACHE_VERSION = 'tfb-2011-v6.6.3';
const APP_SHELL = ['./', './index.html', './app.js', './styles.css', './manifest.json', './assets/vereinslogo.png', './assets/arena.jpg', './assets/navigation/nav-home.png', './assets/navigation/nav-players.png', './assets/navigation/nav-games.png', './assets/navigation/nav-table.png', './assets/navigation/nav-archive.png', './assets/navigation/nav-settings.png', './assets/player-card-corners/corner-iron.png', './assets/player-card-corners/corner-steel.png', './assets/player-card-corners/corner-bronze.png', './assets/player-card-corners/corner-silver.png', './assets/player-card-corners/corner-gold.png', './assets/player-card-corners/corner-inactive.png', './assets/player-card-corners/corner-empty.png', './assets/player-card-corners/corner-platinum-tl.png', './assets/player-card-corners/corner-platinum-tr.png', './assets/player-card-corners/corner-platinum-bl.png', './assets/player-card-corners/corner-platinum-br.png', './assets/player-card-corners/corner-legend-tl.png', './assets/player-card-corners/corner-legend-tr.png', './assets/player-card-corners/corner-legend-bl.png', './assets/player-card-corners/corner-legend-br.png', './assets/player-profile/stat-games.png', './assets/player-profile/stat-wins.png', './assets/player-profile/stat-losses.png', './assets/player-profile/stat-points.png', './assets/player-profile/discipline-single.png', './assets/player-profile/discipline-double.png', './assets/player-profile/tab-overview.png', './assets/player-profile/tab-stats.png', './assets/player-profile/tab-medals.png', './assets/player-profile/tab-seasons.png', './assets/player-profile/gauge-ring.png', './assets/player-profile/activity-match.png', './assets/player-profile/activity-win.png', './assets/player-profile/activity-medal.png', './assets/player-profile/activity-rank.png', './assets/player-profile/record-streak.png', './assets/player-profile/record-opponent.png', './assets/player-profile/record-discipline.png', './assets/player-profile/record-placement.png', './assets/player-profile/season-plaque.png', './assets/player-profile/status-active.png', './assets/player-profile/status-inactive.png', './assets/ranks/rank-iron.png', './assets/ranks/rank-bronze.png', './assets/ranks/rank-steel.png', './assets/ranks/rank-silver.png', './assets/ranks/rank-gold.png', './assets/ranks/rank-platinum.png', './assets/ranks/rank-legend.png', './assets/table-awards/podium-iron.png', './assets/table-awards/podium-bronze.png', './assets/table-awards/podium-silver.png', './assets/table-awards/podium-gold.png', './assets/table-awards/single-bronze.png', './assets/table-awards/single-silver.png', './assets/table-awards/single-gold.png', './assets/table-awards/double-bronze.png', './assets/table-awards/double-silver.png', './assets/table-awards/double-gold.png', './assets/table-awards/home-overall-leader.png', './assets/table-awards/home-single-leader.png', './assets/table-awards/home-double-leader.png', './assets/medals/medal-m0-debuet.png', './assets/medals/medal-m1-stammspieler.png', './assets/medals/medal-m2-dauerbrenner.png', './assets/medals/medal-m3-erster-triumph.png', './assets/medals/medal-m4-siegesjaeger.png', './assets/medals/medal-m5-vereinsgroesse.png', './assets/medals/medal-m6-einzelkaempfer.png', './assets/medals/medal-m7-duellist.png', './assets/medals/medal-m8-einzel-spezialist.png', './assets/medals/medal-m9-teamplayer.png', './assets/medals/medal-m10-doppel-ass.png', './assets/medals/medal-m11-team-legende.png', './assets/medals/medal-m12-hattrick.png', './assets/medals/medal-m13-unaufhaltsam.png', './assets/medals/medal-m14-serien-legende.png', './assets/medals/medal-p1-saisonmeister.png', './assets/medals/medal-p2-allround-meister.png', './assets/medals/medal-p3-50er-sieger.png', './assets/medals/medal-p4-100er-club.png'];

async function cacheOne(cache, url) {
  try {
    const req = new Request(url, { cache: 'reload' });
    const res = await fetch(req);
    if (res && res.ok) await cache.put(url, res.clone());
  } catch (_) {}
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_VERSION);
    await Promise.all(APP_SHELL.map(url => cacheOne(cache, url)));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(n => n.startsWith('tfb-2011-') && n !== CACHE_VERSION).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  const isNavigation = event.request.mode === 'navigate';
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_VERSION);
    if (isNavigation) {
      try {
        const fresh = await fetch(event.request);
        if (fresh && fresh.ok) await cache.put('./index.html', fresh.clone());
        return fresh;
      } catch (_) {
        return (await cache.match('./index.html')) || (await cache.match('./')) || Response.error();
      }
    }
    const hit = await cache.match(event.request, { ignoreSearch: true });
    if (hit) return hit;
    try {
      const fresh = await fetch(event.request);
      if (fresh && fresh.ok) await cache.put(event.request, fresh.clone());
      return fresh;
    } catch (_) {
      return Response.error();
    }
  })());
});
