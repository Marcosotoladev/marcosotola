import Perfil from '../../components/Perfil/Perfil';
import Title from '../../components/Title/Title';
import Name1 from '../../components/Name1/Name';
import Contact from '../../components/Contact/Contact';
import Buttons from '../../components/Buttons/Buttons';

import Navbar from '../../components/Navbar/Navbar';


const page = () => {
  return (
<div className='flex flex-col w-full '>
  <div className='justify-start'><Name1 /></div>

  <div ><Title /></div>
  <div ><Perfil /></div>
  <div ><Contact /></div>
  <div ><Buttons /></div>
  
</div>

  );
};

export default page;
