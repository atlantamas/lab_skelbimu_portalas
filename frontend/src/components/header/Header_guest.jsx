import React from "react"
import { set_state_page } from "../../App.jsx"


const Header_guest = function (props)
{
    // props

    const set_state_page = props.set_state_page

    return <header
        style={
            {
                width: "100%",
                minHeight: "6.5em",
                lineHeight: "6.5em",
                textAlign: "right",
                backgroundColor: "rgb(240, 240, 240)"
            }
        }
    >
        <button
            onClick={
                function ()
                {
                    set_state_page("Page_sing_in")
                }
            }>sign-in</button>
        <button
            onClick={
                function ()
                {
                    set_state_page("Page_sing_up")
                }
            }> sign-up</button>
    </header >
}
export default Header_guest