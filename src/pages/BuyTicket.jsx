import { useParams } from "react-router-dom";
import { useGet } from "../hooks/useGet";
import { useEffect } from "react";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";
import { HeaderTitle } from "../components/HeaderTitle/HeaderTitle";
import bts from "../style/pages/BuyTicket.module.scss";

export const BuyTicket = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/mediesuset/tickets/${id}`
  );

  const ticket = data?.item;

  useEffect(() => {
    document.title = `${ticket?.name} - Mediesuset`;
  }, [ticket]);

  //   console.log(data);
  return (
    <SectionContainer>
      <h2>BILLETTER</h2>
      <HeaderTitle title="INFORMATION OM DEN VALGTE BILLET" />
      {ticket?.description}
      <p>{ticket?.price} DKK</p>
      <HeaderTitle title="BESTILLING" />
    </SectionContainer>
  );
};
