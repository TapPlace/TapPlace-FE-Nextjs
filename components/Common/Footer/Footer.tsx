import s from './Footer.module.scss';

import Image from 'next/image';
import logo from '@/img/Logo/TapPlace/tapplace_logo_black.webp';
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';

const Footer = () => {
  const { viewType } = useAppSelector(state => state.common);

  return (
    <footer className={s.container}>
      {viewType === 'MOBILE' ? (
        <>
          <Image
            className={s.logo}
            src={logo}
            alt='tapplceLogo'
            onClick={() => {
              window.location.href = '/';
            }}
          />
          <ul className={s.shortcutContainer}>
            <Link href='/consent' className={s.listItem}>
              서비스 이용약관
            </Link>
            <Link href='/policy' className={s.listItem}>
              개인정보처리방침
            </Link>
            <li className={s.listItem}>E-mail : help@tapplace.co.kr</li>
          </ul>
          {/* <ul className={s.tapplaceInfoContainer}>
            <li className={s.listItem}>사업자 등록번호 : 000-00-00000 | 대표 : 박상현</li>
            <li className={s.listItem}>서울시 OO구 OO로 123</li>
            <li className={s.listItem}>전화 : 010-1234-1234</li>
          </ul> */}
          <p className={s.copyright}>Copyright © Tap Place. All rights reserved.</p>
        </>
      ) : (
        <>
          <div className={s.topContainer}>
            <Image
              className={s.logo}
              src={logo}
              alt='tapplceLogo'
              onClick={() => {
                window.location.href = '/';
              }}
            />
            <ul className={s.shortcutContainer}>
              <Link href='/terms' className={s.listItem}>
                서비스 이용약관
              </Link>
              <Link href='/policy' className={s.listItem}>
                개인정보처리방침
              </Link>
              <li className={s.listItem}>E-mail : help@tapplace.co.kr</li>
            </ul>
          </div>
          <hr />
          {/* <ul className={s.tapplaceInfoContainer}>
            <li className={s.listItem}>사업자 등록번호 : 000-00-00000</li>
            <li className={s.listItem}>대표 : 박상현</li>
            <li className={s.listItem}>서울시 OO구 OO로 123</li>
            <li className={s.listItem}>전화 : 010-1234-1234</li>
          </ul> */}
          <p className={s.copyright}>Copyright © Tap Place. All rights reserved.</p>
        </>
      )}
    </footer>
  );
};

export default Footer;
