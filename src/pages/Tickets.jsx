import { NavLink } from "react-router-dom";
import ts from "../style/pages/Tickets.module.scss";
import { SectionContainer } from "../components/SectionContainer/SectionContainer";
import { useGet } from "../hooks/useGet";
import { Hero } from "../components/Hero/Hero";

import Hero3 from "../assets/img/Hero3.png";
import { PageHeader } from "../components/PageHeader/PageHeader";

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
          <PageHeader pageTitle="PARTOUT BILLET - ALLE DAGE" />
          {data?.items
            ?.filter((item) => item.type === "partout")
            .map((ticket) => {
              return (
                <div key={ticket.id} className={ts.TicketRow}>
                  <p>{ticket.name}</p>
                  <p>{ticket.price} DKK</p>

                  <p className={ts.BuyTicket}>
                    <NavLink to={`/ticket/${ticket.id}`}>KØB BILLET</NavLink>
                  </p>
                </div>
              );
            })}
        </div>
        <div className={ts.SingleDayTickets}>
          <PageHeader pageTitle="ENKELTBILLETTER" />
          {data?.items
            ?.filter((item) => item.type === "single")
            .map((ticket) => {
              return (
                <div key={ticket.id} className={ts.TicketRow}>
                  <p>{ticket.name}</p>
                  <p>{ticket.price} DKK</p>
                  <p className={ts.BuyTicket}>
                    <NavLink to={`/ticket/${ticket.id}`}>KØB BILLET</NavLink>
                  </p>
                </div>
              );
            })}
        </div>
      </SectionContainer>
    </>
  );
};
