import { Container } from "./styles";
import Header from "../../components/Header";
import DetailFooter from "../../components/DetailFooter";

function Historic() {
  return (
    <>
      <Header />
      <Container>
        <span>Histórico de pedidos</span>

        <table>
          <thead>
            <tr>
              <th>
                <span>Status</span>
              </th>
              <th>Código</th>
              <th className="detail">Nome do Prato</th>
              <th>Data e Hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ativo</td>
              <td>001</td>
              <td>Massa Carbonara</td>
              <td>2024-01-11 14:30:00</td>
            </tr>
          </tbody>
        </table>
      </Container>
      <DetailFooter />
    </>
  );
}

export default Historic;
