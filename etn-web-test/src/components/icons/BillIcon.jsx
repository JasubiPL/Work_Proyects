import * as React from "react"

const BillIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    {...props}
    className='fill-etn-principal'
  >
    <path d="M24 20c0 1.654-1.346 3-3 3v1h-2v-1c-1.654 0-3-1.346-3-3h2c0 .551.448 1 1 1h2c.552 0 1-.449 1-1a.768.768 0 0 0-.644-.76l-3.041-.507A2.761 2.761 0 0 1 16 16c0-1.654 1.346-3 3-3v-1h2v1c1.654 0 3 1.346 3 3h-2c0-.551-.448-1-1-1h-2c-.552 0-1 .449-1 1 0 .378.271.698.644.76l3.041.507A2.761 2.761 0 0 1 24 20Zm-9.899-5a4.965 4.965 0 0 1 .924-2H5v7h9v-2H7v-3h7.101ZM5 11h5V9H5v2Zm5-6H5v2h5V5Zm6.031 19H1V3c0-1.654 1.346-3 3-3h9.414L21 7.586V10h-2V9h-7V2H4c-.551 0-1 .449-1 1v19h11.424a5.02 5.02 0 0 0 1.607 2ZM14 7h3.586L14 3.414V7Z" />
  </svg>
)

export default BillIcon