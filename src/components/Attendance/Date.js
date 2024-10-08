import React, { useState } from 'react'
import Calendar from 'react-calendar';

const Date = () => {

    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div>
      <span>
          {showCalendar && (
                <Calendar
                  value={date}
                  onChange={setDate}
                  onClickDay={() => setShowCalendar(false)}
                />
              )}
        </span>
    </div>
  )
}

export default Date