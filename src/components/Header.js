import React, {Component} from "react"
import moment from "moment"

class Header extends Component {

    render() {
        return (
            <div className="nameMounth">
                <input type="button" className="btnMounthPrew"
                       onClick={(e) => this.props.myCliced(-1)}
                       value={moment().month(this.props.cuurMounth-1).format("MMM").toUpperCase()}/>
                <input type="button"
                       className="btnMounthCenter"
                       value={moment().month(this.props.cuurMounth).format("MMMM").toUpperCase()}
                />
                <input type="button"
                       id="btnMounthNext"
                       className="btnMounthNext"
                       onClick={(e) => this.props.myCliced(1)}
                       value={moment().month(this.props.cuurMounth+1).format("MMM").toUpperCase()}/>
            </div>
        )
    }
}


export default Header