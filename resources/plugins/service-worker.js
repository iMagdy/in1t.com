export default () => {
  if (!process.server) {
    if ('serviceWorker' in window.navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener('load', () => 
        // register the service worker
        navigator.serviceWorker.register('/worker.js')
      )
    }
  }
}
