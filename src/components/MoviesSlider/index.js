// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <div>
      <Slider {...settings}>
        {moviesList.map(each => (
          <MovieItem key={each.id} itemDetails={each} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
