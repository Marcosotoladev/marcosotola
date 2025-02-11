import Perfil from '../../components/Perfil/Perfil';
import Title from '../../components/Title/Title';
import Name1 from '../../components/Name1/Name';
import Contact from '../../components/Contact/Contact';
import Buttons from '../../components/Buttons/Buttons';
import DownloadCV from '../../components/DownloadCV/DownloadCV';

import Navbar from '../../components/Navbar/Navbar';


const page = () => {
  return (
    <div className='flex flex-col w-full'>
      <div><Navbar /></div>
      <div className='justify-start'><Name1 /></div>
      <div><Title /></div>
      <div><Perfil /></div>
      <div><Contact /></div>
      <div className='flex justify-center items-center w-full my-8'>
        <DownloadCV />
      </div>
      <div><Buttons /></div>
    </div>
  );
};

export default page;
