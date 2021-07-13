import styled from "styled-components";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 60px;
`;

export function PageWrapper({ children }) {
  return <PageContainer>{children}</PageContainer>;
}
