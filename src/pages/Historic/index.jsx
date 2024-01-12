import { Container, Table } from "./styles";
import Header from "../../components/Header";
import DetailFooter from "../../components/DetailFooter";
import laranja from "../../assets/others/status/statusLaranja.svg";
import verde from "../../assets/others/status/statusVerde.svg";
import vermelho from "../../assets/others/status/statusVermelho.svg";

function Historic() {
  return (
    <Container>
      <Header />
      <main>
        <span className="historic">Histórico de pedidos</span>
        <Table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th className="date">Data e Hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="status">
                <img src={vermelho} alt="" />
                Pendente
              </td>
              <td className="code">001</td>
              <td>Massa Carbonara</td>
              <td className="hour">12/01 às 14:30</td>
            </tr>
            <tr>
              <td className="status">
                <img src={laranja} alt="" />
                Pendente
              </td>
              <td className="code">001</td>
              <td>Massa Carbonara</td>
              <td className="hour">12/01 às 14:30</td>
            </tr>
            <tr>
              <td className="status">
                <img src={verde} alt="" />
                Pendente
              </td>
              <td className="code">001</td>
              <td>Massa Carbonara</td>
              <td className="hour">12/01 às 14:30</td>
            </tr>
          </tbody>
        </Table>
      </main>
      <DetailFooter />
    </Container>
  );
}

export default Historic;
