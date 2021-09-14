import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function CalenderApp () {
const [dateState, setDateState] = useState(new Date())
const changeDate = (e) => {
    setDateState(e)
}
return (
    <div className="container-fluid">
      <div className="favorites-header">
            <h2>Calendário</h2>
         </div>
      <div className="calender-main">
        <div className="card">
          <div className="calender-card-body">
            <>
            <Calendar 
            value={dateState}
            onChange={changeDate}
            className="calender-body"
            />
          </>
        </div>
      </div>
    </div>
  </div>
  )
}
