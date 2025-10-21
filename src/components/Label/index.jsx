import './label-styles.css'

export function Label({ children, htmlFor }) {
    // function Label(props) {
      return (
        <label htmlFor={htmlFor} className='label'>
          {children}
        </label>
      )
}
    