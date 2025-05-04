import { format } from 'date-fns'

export default function ShowCard({ date, venue, location, ticketUrl }) {
  return (
    <div className="show-card">
      <h3>{format(new Date(date), 'MMMM do, yyyy')}</h3>
      <p>{venue} - {location}</p>
      <a href={ticketUrl} target="_blank" rel="noopener noreferrer">
        Get Tickets
      </a>
    </div>
  )
}