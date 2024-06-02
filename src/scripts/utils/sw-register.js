import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('browser ini tidak mendukung service worker');
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('service worker telah teregister');
  } catch (error) {
    console.log('gagal register service worker', error);
  }
};

export default swRegister;
