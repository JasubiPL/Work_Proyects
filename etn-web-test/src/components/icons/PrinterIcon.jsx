import * as React from "react"

const PrinterIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    {...props}
    className='fill-etn-principal'
  >
    <g data-name="01 align center">
      <path d="M24 9a3 3 0 0 0-3-3h-2V0H5v6H3a3 3 0 0 0-3 3v12h5v3h14v-3h5ZM7 2h10v4H7Zm10 20H7v-6h10Zm5-3h-3v-5H5v5H2V9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1Z" />
      <path d="M15 10h4v2h-4z" />
    </g>
  </svg>
)

export default PrinterIcon