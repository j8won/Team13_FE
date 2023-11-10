import styled from "styled-components";
import { PropTypes } from "prop-types";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate, useParams } from "react-router-dom";

import Button from "@/components/common/button/Button.jsx";
import InfiniteWithdrawInfo from "@/components/fund-detail/withdraw/InfiniteWithdrawInfo.jsx";
import InfiniteWithdrawInfoLoader from "@/components/fund-detail/withdraw/InfiniteWithdrawInfo.loader.jsx";
import routes from "@/constants/routes.js";

const Styled = {
  Container: styled.div``,
  TitleBar: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.div`
    padding-right: 0.5rem;
    .title {
      padding-bottom: 0.5rem;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .description {
      font-size: 0.75rem;
    }
  `,
};

function Withdraw({ isOrganizer }) {
  const navigate = useNavigate();
  const { fundId } = useParams();
  return (
    <Styled.Container>
      <Styled.TitleBar>
        <Styled.Title>
          <div className="title">출금내역</div>
          <div className="description">
            해당 내역을 클릭하면 자세한 사용 내역 이미지를 확인할 수 있어요
          </div>
        </Styled.Title>
        {isOrganizer && (
          <Button onClick={() => navigate(`${routes.withdraw}/${fundId}`)}>
            출금 신청
          </Button>
        )}
      </Styled.TitleBar>

      <ErrorBoundary
        fallbackRender={({ error }) => {
          return (
            <div style={{ padding: "1rem 0" }}>
              {error?.response?.data?.error?.message}
            </div>
          );
        }}
      >
        <Suspense fallback={<InfiniteWithdrawInfoLoader />}>
          <InfiniteWithdrawInfo isOrganizer={isOrganizer} />
        </Suspense>
      </ErrorBoundary>
    </Styled.Container>
  );
}

Withdraw.propTypes = {
  isOrganizer: PropTypes.bool,
};

export default Withdraw;
