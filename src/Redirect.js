import React from 'react'
import './children/children.scss';

function Redirect(props) {
    return <a className="abdoul" target="_blank" rel="noopener noreferrer" href={props.url}>{props.name}</a>
}
export default Redirect