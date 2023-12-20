// Write your code here
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import 'reactjs-popup/dist/index.css'
import Popup from 'reactjs-popup'

const MovieItem = props => {
  const {itemDetails} = props
  const {thumbnailUrl, videoUrl} = itemDetails
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <>
            <button
              type="button"
              className="trigger-button" data-testid = "closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} controls />
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
