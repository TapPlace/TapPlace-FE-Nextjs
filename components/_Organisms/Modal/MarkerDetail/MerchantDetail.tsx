import { useRecoilValueLoadable } from 'recoil';
import Image from 'next/image';

import s from './MerchantDetail.module.scss';

import addressImgSrc from '@/img/StoreDetail/location_black.webp';
import phoneImgSrc from '@/img/StoreDetail/phone.webp';
import pencilImgSrc from '@/img/StoreDetail/pencil.webp';
import FeedbackListContainer from '@/components/_Molecules/Container/Feedback/FeedbackList';
import FindRouteButton from '@/components/_Atoms/Button/FindRoute/FindRoute';
import FeedbackInAppButton from '@/components/_Atoms/Button/FeedbackInApp/FeedbackInApp';
import FeedbackModalCloseButton from '@/components/_Atoms/Button/FeedbackModalClose/FeedbackModalClose';
import { clickedMerchantFeedbackSelector, clickedMerchantInfoSelector } from '@/recoil/selector/merchant';

const MerchantDetailModal = () => {
  const info = useRecoilValueLoadable(clickedMerchantInfoSelector);
  const feedbacks = useRecoilValueLoadable(clickedMerchantFeedbackSelector);

  switch (info.state) {
    case 'hasValue':
      return (
        <dialog className={s.container}>
          <h2 className='a11y-hidden'>가맹점 정보 모달창</h2>

          <div className={s.placeCategoryNameWrapper}>
            <h3>{info.contents?.place_name}</h3>
            <h4>{info.contents?.category_group_name}</h4>
          </div>

          <FeedbackModalCloseButton />

          <FindRouteButton x={info.contents?.x} y={info.contents?.y} place_name={info.contents?.place_name} />

          <div className={s.addressAndPhonWrapper}>
            <address>
              <Image src={addressImgSrc} alt='addressImage' />
              {info.contents?.road_address_name}
            </address>
            <span>
              <Image src={phoneImgSrc} alt='phoneImage' />
              {info.contents?.phone ? info.contents.phone : '정보가 없습니다'}
            </span>
          </div>

          <div className={s.modifyInfoWrapper}>
            <Image src={pencilImgSrc} alt='reqModifyInfoImg' />
            정보 수정 요청
          </div>

          <hr className={s.divideLine} />
          <FeedbackListContainer feedbacks={feedbacks.contents} />
          <FeedbackInAppButton />
        </dialog>
      );
    case 'loading':
      return <div>loading...</div>;
    case 'hasError':
      return <div>{info.contents.error}</div>;
  }
};

export default MerchantDetailModal;
