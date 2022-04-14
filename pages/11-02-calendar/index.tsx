import { DatePicker } from "antd";
import { useState } from "react";

const CalendarPage = () => {
  const [date, setDate] = useState();
  const [mDate, setMDate] = useState();
  const onChange = (date: any, dateString: any) => {
    console.log(date, dateString);
    setDate(dateString);
  };
  const onChangeMonth = (date: any, dateString: any) => {
    console.log(date, dateString);
    setMDate(dateString);
  };
  return (
    <div>
      <DatePicker onChange={onChange} />;<div>{date}</div>
      <DatePicker onChange={onChangeMonth} picker="month" />
      <div>{mDate}</div>
    </div>
  );
};

export default CalendarPage;
