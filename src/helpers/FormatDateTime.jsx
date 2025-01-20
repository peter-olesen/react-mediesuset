export const formatDate = (datestring) => {
  const date = new Date(datestring);

  const options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  };

  return new Intl.DateTimeFormat("da-DK", options).format(date);
};

export const formatTime = (datestring) => {
  const time = new Date(datestring);

  const options = {
    hour: "2-digit",
    minute: "2-digit",
  };

  return new Intl.DateTimeFormat("da-DK", options).format(time);
};

export const formatDateTime = (datestring) => {
  const time = new Date(datestring);

  const options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = new Intl.DateTimeFormat("da-DK", options).format(time);

  const [weekday, timeStr] = formattedDate.split(" ");

  return `${weekday.charAt(0).toUpperCase() + weekday.slice(1)} kl. ${timeStr}`;
};
