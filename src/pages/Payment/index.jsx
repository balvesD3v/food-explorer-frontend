import {
  Container,
  MainContainer,
  MyOrder,
  MyPayment,
  CheckPayment,
  PaymentForm,
} from "./styles.js";
import Header from "../../components/Header";
import Button from "../../components/Button";
import OrderedDish from "../../components/OrderedDish/index.jsx";
import Detailfooter from "../../components/Detailfooter/index.jsx";
import creditCard from "../../assets/others/CreditCard.svg";
import pixCard from "../../assets/others/layer1.svg";
import actions from "../../assets/others/elements.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

function Payment() {
  const [paymentOption, setPaymentOption] = useState("pix");

  const handlePaymentOptionClick = (option) => {
    setPaymentOption(option);
  };

  return (
    <Container>
      <Header />
      <MainContainer>
        <MyOrder>
          <h2>Meu Pedido</h2>

          <div className="ordered">
            <OrderedDish />
            <OrderedDish />
          </div>

          <span className="total">Total: R$ 25,97</span>
        </MyOrder>
        <MyPayment>
          <h2>Pagamento</h2>

          <CheckPayment>
            <div className="payment">
              <div
                className={`pix ${paymentOption === "pix" ? "selected" : ""}`}
                onClick={() => handlePaymentOptionClick("pix")}
              >
                <img src={pixCard} alt="" />
                <span>pix</span>
              </div>
              <div
                className={`credit ${
                  paymentOption === "credit" ? "selected" : ""
                }`}
                onClick={() => handlePaymentOptionClick("credit")}
              >
                <img src={creditCard} alt="" />
                <span>Crédito</span>
              </div>
            </div>

            <div className="action">
              {paymentOption === "pix" && (
                <div className="pix-fields">
                  <img src={actions} alt="" />
                </div>
              )}

              {paymentOption === "credit" && (
                <div className="credit-fields">
                  <PaymentForm className="payment-form">
                    <div className="numero-cartao">
                      <label for="numero-cartao">Número do cartão</label>
                      <input
                        type="number"
                        id="nome"
                        name="nome"
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>
                    <br />

                    <div className="validity-cvc">
                      <div className="validity">
                        <label for="nome">Validade</label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          placeholder="04/24"
                        />
                      </div>
                      <div className="cvc">
                        <label for="nome">CVC</label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          placeholder="000"
                        />
                      </div>
                    </div>
                    <Button
                      className="finish-payment"
                      title={"Finalizar pagamento"}
                    />
                  </PaymentForm>
                </div>
              )}
            </div>
          </CheckPayment>
        </MyPayment>
      </MainContainer>
      <Detailfooter />
    </Container>
  );
}

export default Payment;
