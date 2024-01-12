import {
  Container,
  MainContainer,
  MyOrder,
  MyPayment,
  CheckPayment,
} from "./styles.js";
import Header from "../../components/Header";
import OrderedDish from "../../components/OrderedDish/index.jsx";
import Detailfooter from "../../components/Detailfooter/index.jsx";
import creditCard from "../../assets/others/CreditCard.svg";
import pixCard from "../../assets/others/layer1.svg";
import actions from "../../assets/others/elements.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

function Payment() {
  return (
    <Container>
      <Header />
      <MainContainer>
        <MyOrder>
          <h2>Meu Pedido</h2>

          <div>
            <OrderedDish />
          </div>

          <span className="total">Total: R$ 25,97</span>
        </MyOrder>
        <MyPayment>
          <h2>Pagamento</h2>

          <CheckPayment>
            <div className="payment">
              <div className="pix">
                <img src={pixCard} alt="" />
                <span>pix</span>
              </div>
              <div className="credit">
                <img src={creditCard} alt="" />
                <span>Crédito</span>
              </div>
            </div>

            <div className="action">
              <img src={actions} alt="" />
            </div>
          </CheckPayment>
        </MyPayment>
      </MainContainer>
      <Detailfooter />
    </Container>
  );
}

export default Payment;
