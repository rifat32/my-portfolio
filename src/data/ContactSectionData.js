import {BiMobile,BiEnvelope} from 'react-icons/bi';
import {IoLocationOutline} from 'react-icons/io5';
const ContactSectionData = {
    title:'Feel free to contact me.',
    infos:[
        {
            id:1,
            key:'location',
            value:'30/10 Sultangoanj Rayer Bazar, Dhaka 1207, Bangladesh',
            icon:<IoLocationOutline/>,
            visibility:true
        },
        {
            id:2,
            key:'email',
            value:'drrifatalashwad0@gmail.com',
            icon:<BiEnvelope/>,
            visibility:true
        },
        {
            id:3,
            key:'phone',
            value:'+880 1771034383',
            icon:<BiMobile/>,
            visibility:true
        },
        // google map will not work if key is not 'map'
        {
            id:4,
            key:'map',
            value:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.039519695196!2d90.35854721451122!3d23.745970094863544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4409d3e6c1%3A0xe1556702c78ae66c!2z4Kas4Ka-4KaH4Kak4KeB4KayIOCmhuCmuOCmvuCmpiDgppzgpr7gpq7gp4cg4Kau4Ka44Kac4Ka_4Kam!5e0!3m2!1sbn!2sbd!4v1616160226051!5m2!1sbn!2sbd',
            icon:'s',
            visibility:true
        },
    ],
    location:{
    data:'30/10 Sultangoanj Rayer Bazar, Dhaka 1207, Bangladesh',
    visibility:true
    }
   
}
export default ContactSectionData;