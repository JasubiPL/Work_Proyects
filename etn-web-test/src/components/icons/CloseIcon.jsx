import * as React from "react"

const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Isolation Mode"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    {...props}
    className='fill-white'
  >
    <path d="M24.061 2.061 21.939-.061 12 9.879 2.061-.061-.061 2.061 9.879 12l-9.94 9.939 2.122 2.122L12 14.121l9.939 9.94 2.122-2.122L14.121 12l9.94-9.939z" />
  </svg>
)

export default CloseIcon
