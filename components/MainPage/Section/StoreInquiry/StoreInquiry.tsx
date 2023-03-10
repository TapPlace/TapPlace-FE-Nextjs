import s from './StoreInquiry.module.scss';

import Image from 'next/image';
import titleImage from '@/img/MockUp/mock_2_titleImg.webp';
import mockup from '@/img/MockUp/mock_2.webp';
import ex_1 from '@/img/MockUp/mock_2_ex1.webp';
import ex_2 from '@/img/MockUp/mock_2_ex2.webp';
import { useAppSelector } from '@/redux/hooks';
import StoreInquiry_Mobile from './MobilerVer/StoreInquiry_Mobile';

const StoreInquiry = () => {
  const { viewType } = useAppSelector(state => state.common);

  return (
    <>
      {viewType === 'MOBILE' ? (
        <StoreInquiry_Mobile />
      ) : (
        <section className={s.container}>
          <Image className={s.mockupImage} src={mockup} alt='mock_2' />
          <div>
            <div className={s.descriptionContainer}>
              <h1 className={s.line_0}>
                <Image src={titleImage} alt='titleImage' />
                가맹점 조회
              </h1>
              <h1 className={s.line_1}>
                내 주변 간편결제 가맹점을
                <br />
                한눈에 확인하세요
              </h1>
              <p className={s.line_2}>
                이제 간편결제 안될까봐 걱정하지 마세요
                <br />
                결제 가능여부를 미리 알려드릴께요
              </p>
            </div>
            <div className={s.exampleContainer}>
              <Image className={s.exampleImage} src={ex_1} alt='ex_1' />
              <Image className={s.exampleImage} src={ex_2} alt='ex_2' />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default StoreInquiry;
