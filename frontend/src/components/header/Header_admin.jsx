import React from "react"
import { set_state_alert_message } from "../../Alert.jsx"
import { set_state_username } from "../../App.jsx"
import { set_state_overlay_message } from "../../Overlay.jsx"
import service_sign_out from "../../services/service_sign_out.mjs"


const Header_admin = function (props)
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
        <span>admin</span>
        <button
            onClick={
                function ()
                {
                    set_state_page("Page_kategorijos")
                }
            }>
            Kategorijos
        </button>
        <button
            onClick={
                async function ()
                {
                    // service_sign_out

                    set_state_overlay_message("service_sign_out...")

                    const result_of_service_sign_out =
                        await service_sign_out()

                        set_state_overlay_message(null)


                    // error:

                    if (result_of_service_sign_out.status === "error")
                    {
                        set_state_alert_message(result_of_service_sign_out.message)
                        return
                    }

                    // success

                    set_state_username(null)

                    set_state_page("Page_sign_in")
                }
            }> sign-out</button>
    </header >
}
export default Header_admin