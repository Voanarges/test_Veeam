import { Consist } from "src/types/Alltypes"

export const createHTML = (item: Consist) =>{
    switch(item.label) {
        case "count":
            return (
                <div className="count">
                    <label htmlFor="numberfield">Count:</label>
                    <input name="numberfield" type='number' min={1} style={{width: "4rem"}}></input>
                </div>
            )
        break;
        case "check":
            return (
                <div className="check">
                    <label htmlFor="checkbox">Is Editable:</label>
                    <input name="checkbox" type='checkbox' style={{width: "2rem", marginLeft: "-0.4rem"}}></input>
                </div>
            )
        break;
        case "date":
            return (
                <div className="date">
                    <label htmlFor="date">Date:</label>
                    <input name="date" type="date"></input>
                </div>
            )
        break;
        case "radio":
            return (
                <div className="radio">
                    <label htmlFor="radio">Check:</label>
                    <input name="radio" type="radio"></input>
                </div>
            )
        break;
        case "textfield":
            return (
                <div className="textfield">
                    <label htmlFor="textfield">Caption:</label>
                    <input name="textfield"></input>
                </div>
            )
        break;
        case "description":
            return (
                <div className="textarea extra">
                    <label htmlFor="textarea">Description:</label>
                    <input name="textarea" style={{height: "6rem"}}></input>
                </div>
            )
        break;
    }
}