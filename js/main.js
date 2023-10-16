//registrando a service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            let reg;
            reg = await navigator.serviceWorker.register('/sw.js', {type: "module"});

            console.log('Service Worker registrada! 😎', reg);
            postNews();
        } catch (err) {
            console.log('😢 Service Worker de registro falhou: ', err)
        }
    });
}

const apiKey = 