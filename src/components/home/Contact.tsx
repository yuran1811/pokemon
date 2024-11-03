import { FC } from 'react';

import { contacts } from '@/constants';

const Contact: FC = () => (
  <div className='flexcentercol sm:w-[30rem] w-full p-4'>
    <div className='font-semibold text-4xl text-pink-300 bg-ctbackground'>Contact</div>
    <div className='flexcenter text-[2.4rem] w-full mt-4'>
      {Object.values(contacts).map(({ ico, url }) => (
        <a key={ico + url} href={url} rel='noopener noreferer' target='_blank'>
          <span className='iconify text-[4.5rem] p-2 m-2' data-icon={ico} />
        </a>
      ))}
    </div>
  </div>
);

export default Contact;
