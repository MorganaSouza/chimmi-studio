const CACHE_NAME = 'doramas-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json'
];

// Instalando o Service Worker e armazenando em cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptando requisições para servir conteúdo do cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

// Atualizando o cache quando o Service Worker é ativado
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Registrar o evento de sincronização em segundo plano
self.addEventListener('sync', event => {
  if (event.tag === 'sync-doramas') {
    event.waitUntil(syncDoramasData());
  }
});

// Função para sincronizar os dados de pesquisa de doramas (exemplo)
async function syncDoramasData() {
  const dataToSync = await getOfflineData(); // Exemplo de função para pegar os dados salvos offline

  if (dataToSync.length > 0) {
    // Aqui você pode enviar os dados para o servidor ou processar a sincronização
    await sendToServer(dataToSync); // Função para enviar os dados ao servidor

    // Após o envio, você pode limpar os dados offline armazenados
    await clearOfflineData();
  }
}

// Funções auxiliares (Exemplo)
async function getOfflineData() {
  // Aqui você pode usar IndexedDB ou Cache API para buscar dados salvos offline
  const offlineData = []; 
  return offlineData;
}

async function sendToServer(data) {
  // Aqui você pode enviar os dados para seu servidor ou API
  const response = await fetch('/api/sync-doramas', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
}

async function clearOfflineData() {
  // Limpa os dados offline após a sincronização
  // Aqui você pode usar IndexedDB ou Cache API para limpar os dados
}


