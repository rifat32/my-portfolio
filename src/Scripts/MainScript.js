 import {select,onscroll,scrollto} from './CommonScripts';

const MainScript = () => {

  /**
   * Back to top button
   */
   let backtotop = document.querySelector('.back-to-top')
   backtotop.addEventListener('click',() => {
     document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
   })
   if (backtotop) {
     const toggleBacktotop = () => {
       if (window.scrollY > 100) {
         backtotop.classList.add('active')
       } else {
         backtotop.classList.remove('active')
       }
     }
     window.addEventListener('load', toggleBacktotop)
     onscroll(document, toggleBacktotop)
   }

 
 

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });
  if (window.location.hash) {
    if (select(window.location.hash)) {
      scrollto(window.location.hash)
    }
  }

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    window.AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

}
export {MainScript}