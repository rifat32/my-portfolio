import {select} from '../../../Scripts/CommonScripts'
const skillsAnimation = () => {
    let skilsContent = select('.skills-content');
    if (skilsContent) {
      new window.Waypoint({
        element: skilsContent,
        offset: '80%',
        handler: function(direction) {
          let progress = select('.progress .progress-bar', true);
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%'
          });
        }
      })
    }
}
export {skillsAnimation}