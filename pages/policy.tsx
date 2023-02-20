import s from './policy.module.scss';

const ProcessingPolicy = () => {
  return (
    <section className={s.container}>
      <h1 className={s.policyTitle}>탭플레이스 서비스 이용약관</h1>
      <article className={s.nJoWrapper}>
        <p className={s.open}>
          {`< 탭플레이스 >`} (&apos;https://www.tapplace.co.kr&apos;이하 &apos;탭플레이스&apos;)은(는) 「개인정보
          보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록
          하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
        </p>
        <p className={s.application}>*이 개인정보처리방침은 2022년 9월 16부터 적용됩니다.</p>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제1조 (개인정보의 처리 목적)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            {`< 탭플레이스 >`}(&apos;https://www.tapplace.co.kr&apos;이하 &apos;탭플레이스&apos;)은(는) 다음의 목적을
            위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용
            목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
            예정입니다.
          </li>
          <li className={`${s.nJoContent} ${s.nJoContentSubContainer}`}>
            1. 서비스, 정보 제공
            <div className={s.nJoContent}>
              신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공 등을 목적으로
              개인정보를 처리합니다.
            </div>
          </li>
          <li className={`${s.nJoContent} ${s.nJoContentSubContainer}`}>
            2. 사용 통계 지표 확인
            <div className={s.nJoContent}>사용자의 이용 빈도 및 통계의 지표 확인 목적으로 개인정보를 처리합니다.</div>
          </li>
          <li className={`${s.nJoContent} ${s.nJoContentSubContainer}`}>
            3. 민원사무 처리
            <div className={s.nJoContent}>
              민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 목적으로 개인정보를 처리합니다.
            </div>
          </li>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제2조 (개인정보의 처리 및 보유 기간)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            ① {`< 탭플레이스 >`}은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에
            동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
          </li>
          <li className={s.nJoContent}>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</li>
        </ul>
        <table>
          <tbody>
            <tr>
              <th>서비스, 정보 제공 및 사용 통계 지표 확인</th>
              <th>민원사무 처리</th>
            </tr>
            <tr>
              <td>서비스 종료 또는 이용자의 서비스 해지시까지</td>
              <td>민원사무 처리 완료까지</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제3조 (처리하는 개인정보의 항목)</h4>
        <p className={s.nJoContent}>탭플레이스는 다음의 개인정보 항목을 처리하고 있습니다.</p>
        <table>
          <tbody>
            <tr>
              <th>서비스, 정보 제공</th>
              <th>사용 통계 지표 확인</th>
              <th>민원사무 처리</th>
            </tr>
            <tr>
              <td>필수항목 : 성별, 생년월일</td>
              <td>필수항목 : 성별, 생년월일, 사용자 디바이스 고유번호(UUID), 접속 로그</td>
              <td>필수항목 : 이메일, 사용자 디바이스 고유번호(UUID), 단말기 운영체제(OS)</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제4조 (개인정보의 파기절차 및 파기방법)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            ① {`< 탭플레이스 >`} 은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는
            지체없이 해당 개인정보를 파기합니다.
          </li>
          <li className={s.nJoContent}>
            ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었을때, 개인정보를 별도의
            데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존하지 않습니다.
          </li>
          <li className={s.nJoContent}>③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.</li>
          <ul className={s.nJoContentSubContainer}>
            <li className={s.nJoContent}>
              1. 탭플레이스 애플리케이션 내에서 서비스 이용 해지시 사용자로부터 수집받은 데이터 중, 아래에 기재된
              데이터를 서버에서 즉시 삭제합니다.
              <div>&nbsp;&nbsp;∙ 사용자 디바이스 고유번호(UUID)</div>
              <div>&nbsp;&nbsp;∙ 성별</div>
              <div>&nbsp;&nbsp;∙ 생년월일</div>
            </li>
            <li className={s.nJoContent}>
              2. 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.
            </li>
            <li className={s.nJoContent}>
              3. 애플리케이션 내에서 서비스 이용 해지 절차를 이행하지 못한경우 전자우편, 서면, 연락 등으로 개인정보
              파기를 요청할 수 있습니다.
            </li>
          </ul>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제5조 (정보주체와 법정대리인의 권리⋅의무 및 그 행사방법에 관한 사항)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            ① 정보주체는 탭플레이스에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수
            있습니다.
          </li>
          <li className={s.nJoContent}>
            ② 제1항에 따른 권리 행사는탭플레이스에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편등을
            통하여 하실 수 있으며 탭플레이스은(는) 이에 대해 지체 없이 조치하겠습니다.
          </li>
          <li className={s.nJoContent}>
            ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.이
            경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
          </li>
          <li className={s.nJoContent}>
            ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가
            제한 될 수 있습니다.
          </li>
          <li className={s.nJoContent}>
            ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를
            요구할 수 없습니다.
          </li>
          <li className={s.nJoContent}>
            ⑥ 탭플레이스은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한
            자가 본인이거나 정당한 대리인인지를 확인합니다.
          </li>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제6조 (개인정보의 안전성 확보조치에 관한 사항)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            탭플레이스는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
          </li>
          <ul className={s.nJoContentSubContainer}>
            <li className={s.nJoContent}>
              1. 개인정보 취급 직원의 최소화 및 교육개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여
              개인정보를 관리하는 대책을 시행하고 있습니다.
            </li>
            <li className={s.nJoContent}>
              2. 내부관리계획의 수립 및 시행개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.
            </li>
            <li className={s.nJoContent}>
              3. 접속기록의 보관 및 위변조 방지개인정보처리시스템에 접속한 기록을 최소 1년 이상 보관, 관리하고
              있으며,다만, 5만명 이상의 정보주체에 관하여 개인정보를 추가하거나, 고유식별정보 또는 민감정보를 처리하는
              경우에는 2년이상 보관, 관리하고 있습니다.또한, 접속기록이 위변조 및 도난, 분실되지 않도록 보안기능을
              사용하고 있습니다.
            </li>
            <li className={s.nJoContent}>
              4. 개인정보에 대한 접근 제한개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를
              통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의
              무단 접근을 통제하고 있습니다.
            </li>
          </ul>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제7조 (개인정보를 자동으로 수집하는 장치의 설치⋅운영 및 그 거부에 관한 사항)</h4>
        <p className={s.nJoContent}>
          탭플레이스 은(는) 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용하지 않습니다.
        </p>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제8조 (개인정보 보호책임자에 관한 사항)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            ① 탭플레이스 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의
            불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </li>
          <h2 className={s.tableName}>▶ 개인정보 보호책임자</h2>
          <table className={s.columnTable}>
            <tr>
              <th>성명</th>
              <td>박상현</td>
            </tr>
            <tr>
              <th>직책</th>
              <td>대표</td>
            </tr>
            <tr>
              <th>직급</th>
              <td>대표</td>
            </tr>
            <tr>
              <th>연락처</th>
              <td>
                070-8064-6708, help@tapplace.co.kr
                <br />※ 개인정보 보호 담당부서로 연결됩니다.
              </td>
            </tr>
          </table>
          <h2 className={s.tableName}>▶ 개인정보 보호 담당부서</h2>
          <table className={s.columnTable} style={{ marginBottom: '2.4rem' }}>
            <tr>
              <th>부서명</th>
              <td>개발</td>
            </tr>
            <tr>
              <th>담당자</th>
              <td>박상현</td>
            </tr>
            <tr>
              <th>연락처</th>
              <td>070-8064-6708, help@tapplace.co.kr</td>
            </tr>
          </table>
          <li className={s.nJoContent}>
            ② 정보주체께서는 탭플레이스 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의,
            불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 탭플레이스은(는)
            정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
          </li>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제9조 (개인정보의 열람청구를 접수⋅처리하는 부서)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.
            {`< 탭플레이스 >`}은(는) 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.
          </li>
          <h2 className={s.tableName}>▶ 개인정보 보호책임자</h2>
          <table className={s.columnTable}>
            <tr>
              <th>부서명</th>
              <td>개발</td>
            </tr>
            <tr>
              <th>담당자</th>
              <td>박상현</td>
            </tr>
            <tr>
              <th>연락처</th>
              <td>070-8064-6708, help@tapplace.co.kr</td>
            </tr>
          </table>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제10조 (정부저체의 권익침해에 대한 구제방법)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원
            개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.
            <br />이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
          </li>
          <ul className={s.nJoContentSubContainer} style={{ marginBottom: '2.4rem' }}>
            <li className={s.nJoContent}>1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)</li>
            <li className={s.nJoContent}>2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)</li>
            <li className={s.nJoContent}>3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)</li>
            <li className={s.nJoContent}>4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)</li>
          </ul>
          <li className={s.nJoContent}>
            「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의
            규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는
            행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.※ 행정심판에 대해 자세한 사항은
            중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.
          </li>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제 11조 (개인정보 처리방침 변경)</h4>
        <p className={s.nJoContent}>① 이 개인정보처리방침은 2022년 9월 16부터 적용됩니다.</p>
      </article>
    </section>
  );
};

export default ProcessingPolicy;
