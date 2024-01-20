import * as React from "react"

const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Isolation Mode"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    {...props}
    className='fill-etn-principal border-etn-principal border-solid border-2 p-1 rounded-md cursor-pointer'
    onClick={props.click}
  >
    <path d="M0 10.5h24v3H0zM0 3.5h24v3H0zM0 17.5h24v3H0z" />
  </svg>
)

export default MenuIcon