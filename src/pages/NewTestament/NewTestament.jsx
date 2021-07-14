import { BtnContainer } from "../../components/BtnContainer/BtnContainer";
import { Buttons } from "../../components/Buttons/Buttons";
import { Navigation } from "../../components/Navigation/Navigation";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { PageTitle } from "../../components/Title/PageTitle";

export function NewTestament() {
  const novoTestamento = ["Mateus", "Marcos", "Lucas", "João", "Atos", "Romanos", "1 Coríntios", "2 Coríntios", "Gálatas"]
  return (
    <>
      <PageTitle />

      <Subtitle>
        <h2>Novo Testamento</h2>
      </Subtitle>

      <PageWrapper>
        <BtnContainer primary>
        {novoTestamento.map(livro => (
          <Buttons key={livro}>{livro}</Buttons>
        ))}
        </BtnContainer>
        <Navigation />
      </PageWrapper>
    </>
  );
}
