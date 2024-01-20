import * as React from "react"

const CalendarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    {...props}
    className='fill-zinc-300'
  >
    <path d="M21 2h-3V0h-2v2H8V0H6v2H3C1.35 2 0 3.35 0 5v19h24V5c0-1.65-1.35-3-3-3ZM3 4h18c.55 0 1 .45 1 1v2H2V5c0-.55.45-1 1-1Zm13 5v3h-3V9h3Zm-5 3H8V9h3v3Zm-5 0H2V9h4v3Zm0 2v3H2v-3h4Zm2 0h3v3H8v-3Zm3 5v3H8v-3h3Zm2 0h3v3h-3v-3Zm0-2v-3h3v3h-3Zm5-3h4v3h-4v-3Zm0-2V9h4v3h-4ZM2 19h4v3H2v-3Zm16 3v-3h4v3h-4Z" />
  </svg>
)

export default CalendarIcon