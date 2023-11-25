"use client";
import {
  Calendar as BigCalendar,
  Views,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const DnDCalendar = withDragAndDrop(BigCalendar);

export default function Calendar() {
  const localizer = momentLocalizer(moment);

  const events = [
    {
      id: 0,
      title: "All Day Event very long title",
      start: new Date(),
      end: new Date(),
    },
  ];

  return (
    <DnDCalendar
      className="w-full"
      defaultView={Views.DAY}
      popup
      resizable
      selectable
      localizer={localizer}
      events={events}
      views={[Views.DAY, Views.WEEK, Views.MONTH]}
    />
  );
}
