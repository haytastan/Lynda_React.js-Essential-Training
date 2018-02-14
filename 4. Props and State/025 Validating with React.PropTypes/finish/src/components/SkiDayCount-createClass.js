import { createClass, PropTypes } from 'react'
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

export const SkiDayCount = createClass({
  propTypes: {                  // checks proptypes (logs errors on console)
    total: PropTypes.number.isRequired,       // PropTypes imported above
    powder: PropTypes.number, // number, object, bool, array, string, instanceOf(..) etc
    backcountry: PropTypes.number.isRequired    // required property
  },
  getDefaultProps() {
    return {
      powder: 50, 
      backcountry: 15, 
      goal: 100
    }
  },
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  },
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  },
  render() {
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
            <Calendar />
          <span>days</span>
        </div>
        <div className="powder-days">
          <span>{this.props.powder}</span>
            <SnowFlake />
          <span>days</span>
        </div>
        <div className="backcountry-days">
          <span>{this.props.backcountry}</span>
            <Terrain />
          <span>days</span>
        </div>
        <div>
          <span>
            {this.calcGoalProgress(
              this.props.total, 
              this.props.goal
            )}
          </span>
        </div>
      </div>
    )
  }
})