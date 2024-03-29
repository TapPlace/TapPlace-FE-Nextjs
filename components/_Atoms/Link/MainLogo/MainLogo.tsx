import Link from 'next/link';
import Image from 'next/image';

import s from './MainLogo.module.scss';

import MainLogo from '@/img/Logo/TapPlace/tapplace_logo.webp';

const MainLogoLink = () => {
  return (
    <h1 className={s.linkContainer} data-service-name='TapPlace'>
      <Link href='/'>
        <Image src={MainLogo} alt='탭플레이스' priority />
      </Link>
    </h1>
  );
};

export default MainLogoLink;
