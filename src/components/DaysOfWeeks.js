import React, {Component} from "react"
import moment from "moment"

class DaysOfWeeks extends Component{
    render() {
        let getClick = this.props.cuurMounth - 3;
        let startMounth = moment().clone().startOf("month").startOf("isoWeek").add(getClick, "month").isoWeek();

        const renderDays = () => {
            const days = [];

            for(let i = 0; i < 7; i++) {

                // console.log(moment().day(i).week(startMounth).format("D"));
                console.log(moment().daysInMonth());

                days.push(
                    <div key={i} onClick={this.MyClick}>
                        {
                            moment().day(i).week(startMounth).format("D")
                        }
                    </div>

                );
            }

            ++startMounth;
            return days;
        };

        return(
            <div>
                {renderDays()}
            </div>
        )
    }
}

export default DaysOfWeeks