import React from "react"
import { set_state_alert_message } from "../../Alert.jsx"
import { set_state_page, set_state_username, state_username } from "../../App.jsx"
import { set_state_overlay_message } from "../../Overlay.jsx"
import service_sign_out from "../../services/service_sign_out.mjs"


const Header_user = function ()
{
    //

    <span>{state_username}</span>

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
        <span>{state_username}</span>

        <button
            onClick={
                function ()
                {
                    set_state_page("Page_kurti_skelbima")
                }
            }>Kurti skelbima</button>
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

                    set_state_username(null)

                    set_state_page("Page_sign_in")

                }
            }> sign-out</button>


    </header >
}
export default Header_user