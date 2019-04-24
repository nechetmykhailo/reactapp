import React ,{Component} from "react"
import Header from "../components/Header"
import DaysOfMounth from "../components/DaysOfMounth"
import Weeks from "../components/Weeks"
import moment from "moment"

class Kalendar extends Component{

    constructor(props) {
        super(props);

        let cuurMounth = moment().month();
        this.state = {
            cuurMounth: cuurMounth
        };
    }

    myCliced = (nextPrevWeek) => {
        this.setState({
            cuurMounth: this.state.cuurMounth + nextPrevWeek
        });
    };

    render() {
        return (
            <div className="wrapper">
                <Header myCliced={this.myCliced} cuurMounth={this.state.cuurMounth}/>
                <DaysOfMounth/>
                <Weeks cuurMounth={this.state.cuurMounth}/>
            </div>
        )
    }
}

export default Kalendar