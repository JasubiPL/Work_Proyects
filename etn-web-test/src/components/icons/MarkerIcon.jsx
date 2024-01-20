import * as React from "react"

const MarkerIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Isolation Mode"
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    {...props}
    className='fill-zinc-300'
  >
    <path d="M12 .021A10.077 10.077 0 0 0 1.935 10.087c0 5.274 8.166 12.329 9.1 13.117l.967.817.967-.817c.932-.788 9.1-7.843 9.1-13.117A10.077 10.077 0 0 0 12 .021Zm0 20.043c-3.065-2.792-7.067-7.328-7.067-9.977a7.067 7.067 0 1 1 14.134 0c0 2.644-4.003 7.182-7.067 9.977Z" />
    <circle cx={12} cy={10.002} r={2.997} />
  </svg>
)

export default MarkerIcon