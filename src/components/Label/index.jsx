import './label-style.css'
/* 
function Label (props) {
  return (
    <label htmlFor={props.htmlFor}>
      {props.children}
    </label>
  )
*/

export function Label ({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className='label'>
      {children}
    </label>
  )
}