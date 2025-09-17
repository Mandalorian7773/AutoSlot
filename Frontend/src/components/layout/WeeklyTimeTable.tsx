import React from "react";

interface TimetableCell {
  subject: string;
  teacher: string;
  room: string;
  isBreak?: boolean;
}

const Timetable: React.FC = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const times = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 01:00",
    "02:00 - 03:00",
    "03:00 - 04:00",
  ];

  const data: Record<string, Record<string, TimetableCell>> = {};

  times.forEach((time, tIndex) => {
    data[time] = {} as Record<string, TimetableCell>;
    days.forEach((day, dIndex) => {
      if (time === "11:00 - 12:00") {
        data[time][day] = {
          subject: "Break",
          teacher: "",
          room: "",
          isBreak: true,
        };
      } else {
        data[time][day] = {
          subject: `Subject ${tIndex + 1}-${dIndex + 1}`,
          teacher: `Teacher ${tIndex + 1}-${dIndex + 1}`,
          room: `Room ${100 + tIndex * 10 + dIndex}`,
        };
      }
    });
  });

  return (
    
      <table className="w-full border-separate border-spacing-2 text-left text-sm">
        <thead>
          <tr>
            <th className="bg-[#faf4ec] text-[#3a3a3a] font-semibold rounded-lg px-4 py-3 w-50 text-center">
              Time
            </th>
            {days.map((day) => (
              <th
                key={day}
                className="bg-[#fcd9a3] text-[#3a3a3a] font-semibold rounded-lg w-40  text-center"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time}>
              <td className="bg-[#faf4ec] text-[#3a3a3a] font-normal rounded-lg px-4 py-6 text-center">
                {time}
              </td>
              {days.map((day) => {
                const cell = data[time][day];
                if (cell.isBreak) {
                  return (
                    <td
                      key={day}
                      className="bg-[#faf4ec] text-[#3a3a3a] font-semibold rounded-lg px-4 py-2 text-center"
                    >
                      Break
                    </td>
                  );
                }
                return (
                  <td
                    key={day}
                    className="bg-[#f0f7fc] rounded-lg px-4 py-3 align-top"
                  >
                    <p className="font-semibold text-[#3a3a3a] leading-tight">
                      {cell.subject}
                    </p>
                    <p className="text-[#8a8a8a] text-xs mt-1 leading-tight">
                      {cell.teacher}
                    </p>
                    <p className="text-[#3a7fc1] text-xs mt-1 leading-tight cursor-pointer">
                      {cell.room}
                    </p>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
  
  );
};

export default Timetable;