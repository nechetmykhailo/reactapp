import React, {Component} from "react"
import moment from "moment"
// import DaysOfWeeks from "../components/DaysOfWeeks"


class Weeks extends Component {
    render() {

        let getClick = this.props.cuurMounth - 3;
        let startMounth = moment().clone().startOf("month").startOf("isoWeek").add(getClick, "month").isoWeek();

        const renderDays = () => {
            const days = [];

            for(let i = 0; i < 7; i++) {
                console.log(moment().add(getClick, "month").daysInMonth());

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

        const renderWeeks = () =>{
            const weeks = [];

            let getClick = this.props.cuurMounth - 3;

            let startMounth = moment().startOf("month").startOf("isoWeek").add(getClick, "month").isoWeek();
            let endMounyh = moment().endOf("month").endOf("isoWeek").add(getClick, "month").isoWeek();

            let currNumberMounth = endMounyh-startMounth+1;

            // console.log("start " + startMounth);
            // console.log("end " + endMounyh);
            // console.log("sum " + currNumberMounth);

            for(let i=0; i<currNumberMounth; i++){
                weeks.push(
                    <div key={i} className="days">
                        {
                            renderDays()
                        }
                    </div>
                );
            }
            return weeks;
        };

        return (
            <div>
                {renderWeeks()}
            </div>
        )
    }

    MyClick(){

    }
}

export default Weeks