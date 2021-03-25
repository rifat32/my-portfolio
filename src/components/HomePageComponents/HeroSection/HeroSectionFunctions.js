import {select} from '../../../Scripts/CommonScripts';

const Typed = () => {
    const typed = select('.typed')
    if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items')
      typed_strings = typed_strings.split(',')
      new window.Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 40,
        backSpeed: 50,
      });
    }
}

export {Typed}