var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {location, temp} = this.props;
//
//   }
// });
//old version
//(notice that we can replace (props) => {...} with ({temp,location}) => {...})
var WeatherMessage = ({temp, location}) => {
  return(
    <h3>It is {temp} *Farenheit in {location}</h3>
  )
}


module.exports = WeatherMessage;
