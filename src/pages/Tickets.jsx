import { SectionContainer } from "../components/SectionContainer/SectionContainer";
import { useGet } from "../hooks/useGet";
import ts from "../style/pages/Tickets.module.scss";
import { Hero } from "../components/Hero/Hero";

import Hero3 from "../assets/img/Hero3.png";

export const Tickets = () => {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/mediesuset/tickets"
  );

  return (
    <>
      <Hero imageSource={Hero3} altText="Hero Image" />
      <SectionContainer>
        <h2>BILLETTER</h2>
        <div className={ts.PartoutTickets}>
          <div className={ts.Header}>
            <h3>PARTOUT BILLET - ALLE DAGE</h3>
          </div>
          {data?.items
            ?.filter((item) => item.type === "partout")
            .map((item) => {
              return (
                <div key={item.id} className={ts.TicketRow}>
                  <p>{item.name}</p>
                  <p>{item.price} DKK</p>
                  <p className={ts.BuyTicket}>KØB BILLET</p>
                </div>
              );
            })}
          <div className={ts.SingleDayTickets}>
            <div className={ts.Header}>
              <h3>ENKELTBILLETTER</h3>
            </div>
            {data?.items
              ?.filter((item) => item.type === "single")
              .map((item) => {
                return (
                  <div key={item.id} className={ts.TicketRow}>
                    <p>{item.name}</p>
                    <p>{item.price} DKK</p>
                    <p className={ts.BuyTicket}>KØB BILLET</p>
                  </div>
                );
              })}
          </div>
        </div>
      </SectionContainer>
    </>
  );
};
