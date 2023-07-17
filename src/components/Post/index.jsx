/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import './styles.scss'

export function Post(props) {
  const navigate = useNavigate()
  const DAY_MILLISECONDS = 1000 * 60 * 60 * 24;
  function getRelativeTime(timestamp) {
    const rtf = new Intl.RelativeTimeFormat('pt', {
      numeric: 'auto',
      style: 'long'
    });
    const daysDifference = Math.round(
      (timestamp - new Date().getTime()) / DAY_MILLISECONDS,
    );
  
    return rtf.format(daysDifference, 'day');
  }

  return (
    <section className="post" onClick={() => navigate(`/project/${props.id}`)}>
      <h2 className="title">{props.title}</h2>
      <p className="description">{props.description}</p>
      <b className="difficulty">{props.difficulty}</b>
      <span>{getRelativeTime(new Date(props.date).getTime())}</span>
    </section>
  )
}