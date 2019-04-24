import React, {Component} from "react"
import moment from "moment"
// import DaysOfWeeks from "../components/DaysOfWeeks"


class Weeks extends Component {
    constructor(props){
        super(props);
        this.state={
            active: false
        };

        this.MyClick = this.MyClick.bind(this);
    }

    render() {

        let getClick = this.props.cuurMounth - 3;
        let startMounth = moment().clone().startOf("month").startOf("isoWeek").add(getClick, "month").isoWeek();

        const renderDays = () => {
            const days = [];

            const currentState = this.state.active ? "selected-day" : "";

            for(let i = 0; i < 7; i++) {
                let allDays = moment().day(i).week(startMounth).format("D");

                let currDay = moment().format("D");

                // let startMonth = allDays.indexOf("1");
                let startMonth = allDays.slice(allDays[0], allDays.indexOf(moment().daysInMonth()));
                let end = moment().daysInMonth();
                let endMonth = allDays.indexOf(end);

                // console.log("start " + startMonth);
                console.log("end " + allDays);

                days.push(
                    <div key={i} onClick={this.MyClick} className={currentState}>
                        {
                            allDays
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

        this.setState({
            active: !this.state.active
        });

        console.log(this.state.active);
    }
}

export default Weeks