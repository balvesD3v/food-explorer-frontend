import Select from "react-select";
import { Container, Table } from "./styles";
import HeaderAdmin from "../../components/HeaderAdmin";
import DetailFooter from "../../components/DetailFooter";
import laranja from "../../assets/others/status/statusLaranja.svg";
import verde from "../../assets/others/status/statusVerde.svg";
import vermelho from "../../assets/others/status/statusVermelho.svg";

const options = [
  {
    value: "preparando",
    label: (
      <div className="status-cell">
        <img className="status-image" src={laranja} alt="" />
        Preparando
      </div>
    ),
  },
  {
    value: "entregue",
    label: (
      <div className="status-cell">
        <img className="status-image" src={verde} alt="" />
        Entregue
      </div>
    ),
  },
  {
    value: "pendente",
    label: (
      <div className="status-cell">
        <img className="status-image" src={vermelho} alt="" />
        Pendente
      </div>
    ),
  },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid #ddd",
    color: state.isSelected ? "#0D1D25" : "#000",
    backgroundColor: state.isSelected ? "#ddd" : "white",
    border: "1px solid #ddd",
    "&:hover": {
      backgroundColor: "#ddd",
      color: "#000",
    },
  }),
  control: (provided, state) => ({
    ...provided,
    boxShadow: "none",
    border: "none",
    color: state.isSelected ? "#fff" : "#fff",
    backgroundColor: state.isFocused ? "#0D1D25" : "#0D1D25",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#C4C4CC",
  }),
};

function HistoricAdmin() {
  const defaultValue = options[0];

  return (
    <Container>
      <HeaderAdmin />
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
                <Select
                  className="select-container"
                  options={options}
                  styles={customStyles}
                  defaultValue={defaultValue}
                />
              </td>
              <td className="code">001</td>
              <td>Massa Carbonara</td>
              <td className="hour">12/01 às 14:30</td>
            </tr>
            <tr>
              <td className="status">
                <Select
                  className="select-container"
                  options={options}
                  styles={customStyles}
                  defaultValue={defaultValue}
                />
              </td>
              <td className="code">001</td>
              <td>Massa Carbonara</td>
              <td className="hour">12/01 às 14:30</td>
            </tr>
            <tr>
              <td className="status">
                <Select
                  className="select-container"
                  options={options}
                  styles={customStyles}
                  defaultValue={defaultValue}
                />
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

export default HistoricAdmin;
