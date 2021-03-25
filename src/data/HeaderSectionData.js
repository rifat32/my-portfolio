import {BiHome,BiUser,BiFileBlank,BiBookContent,BiServer,BiEnvelope} from 'react-icons/bi';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
const HeaderComponentsData = {
name:'RIFAT AL- ASHWAD',
image:'./assets/img/profile-img.jpg',
navLinks:[
    {
        id:1,
        icon:<BiHome className='hashlink'/>,
        link:'/#hero',
        text:'Home',
        visibility:true
    },
    {
        id:2,
        icon:<BiUser/>,
        link:'/#about',
        text:'About',
        visibility:true
    },
    {
        id:3,
        icon:<BiFileBlank/>,
        link:'/#resume',
        text:'Resume',
        visibility:false
    },
    {
        id:4,
        icon:<BiBookContent/>,
        link:'/#portfolio',
        text:'Portfolio',
        visibility:true
    },
    {
        id:5,
        icon:<BiServer/>,
        link:'/#services',
        text:'Services',
        visibility:true
    },
    {
        id:6,
        icon:<BiEnvelope/>,
        link:'/#contact',
        text:'Contact',
        visibility:true
    },
  
    
    

],
socialLinks:[
    {
        id:1,
        media:'github',
        icon:<FaGithub/>,
        link:'https://github.com/rifat32',
        visibility:true
    },
    {
        id:2,
        media:'twitter',
        icon:<FaTwitter/>,
        link:'',
        visibility:false
    },
    {
        id:3,
        media:'facebook',
        icon:<FaFacebookF/>,
        link:'https://www.facebook.com/Real-Web-Developer-104162748159942',
        visibility:true
    },
    {
        id:4,
        media:'instagram',
        icon:<FaInstagram/>,
        link:'',
        visibility:false
    },
    {
        id:5,
        media:'linkedin',
        icon:<FaLinkedinIn/>,
        link:'',
        visibility:false
    }
]

}
export default HeaderComponentsData;