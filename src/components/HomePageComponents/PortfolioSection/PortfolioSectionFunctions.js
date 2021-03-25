import {select,on } from '../../../Scripts/CommonScripts';
  const portfolioIsotop = () => {
    setTimeout(() => {
      window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
          if (portfolioContainer) {
            let portfolioIsotope = new window.Isotope(portfolioContainer, {
              itemSelector: '.portfolio-item'
            });
      
            let portfolioFilters = select('#portfolio-flters li', true);
      
            on('click', '#portfolio-flters li', function(e) {
              e.preventDefault();
              portfolioFilters.forEach(function(el) {
                el.classList.remove('filter-active');
              });
              this.classList.add('filter-active');
      
              portfolioIsotope.arrange({
                filter: this.getAttribute('data-filter')
              });
              portfolioIsotope.on('arrangeComplete', function() {
                window.AOS.refresh()
              });
            }, true);
          }
      
        });
      //   ############# without window load  #############
      let portfolioContainer = select('.portfolio-container');
      if (portfolioContainer) {
          let portfolioIsotope = new window.Isotope(portfolioContainer, {
            itemSelector: '.portfolio-item'
          });
    
          let portfolioFilters = select('#portfolio-flters li', true);
    
          on('click', '#portfolio-flters li', function(e) {
            e.preventDefault();
            portfolioFilters.forEach(function(el) {
              el.classList.remove('filter-active');
            });
            this.classList.add('filter-active');
    
            portfolioIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            portfolioIsotope.on('arrangeComplete', function() {
              window.AOS.refresh()
            });
          }, true);
        }
     },1000)
  }
  export {portfolioIsotop};