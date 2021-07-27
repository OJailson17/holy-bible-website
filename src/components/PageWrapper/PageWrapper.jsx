import styled from "styled-components";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({secondary}) => secondary ? "row" : "column"};
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 20px;
`;

export function PageWrapper({ children, secondary }) {
  return <PageContainer secondary={secondary}>{children}</PageContainer>;
}
