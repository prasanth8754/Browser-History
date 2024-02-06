import './index.css'

const HistoryItem = props => {
  const {history, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history
  const deleteHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="container-0">
        <p className="time-para">{timeAccessed}</p>
        <div className="container-2">
          <img className="social-logo" src={logoUrl} alt="domain logo" />
          <div className="container-3">
            <p className="title-para">{title}</p>
            <p className="domain-para">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button type="button" data-testid="delete" onClick={deleteHistory}>
        <img
          className="delete-logo"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
