import React from "react"
import { set_state_alert_message } from "../Alert.jsx"
import Header from "../components/header/Header.jsx"
import { set_state_overlay_message } from "../Overlay.jsx"
import service_kategorijos_create from "../services/service_kategorijos_create.mjs"

const Page_kategorijos = function ()
{

    // refs

    const ref_input_pavadinimas = React.useRef()
    const ref_input_password = React.useRef()

    return <>

        <Header
            set_state_page={set_state_page}
        >
        </Header>

        <main
            style=
            {
                {
                    width: "fit-content",
                    padding: "1em",
                    border: "0",
                    margin: "1em auto 0 auto",
                    textAlign: "left",
                    backgroundColor: "rgb(240, 240, 240)"
                }
            }
        >

            <div>Pavadinimas:</div>
            <input
                ref={ref_input_pavadinimas}
                type="text"
            ></input>

            <button
                onClick={
                    async function ()
                    {

                        // inputs

                        const pavadinimas = ref_input_pavadinimas.current.value

                        // service_kategorijos_create

                        set_state_overlay_message("service_kategorijos_create...")

                        const result_of_service_kategorijos_create =  await service_kategorijos_create(param_pavadinimas)

                        set_state_overlay_message(null)

                        // error:

                        if (result_of_service_kategorijos_create.status === "error")
                        {
                            set_state_alert_message(
                                result_of_service_kategorijos_create.message
                            )
                            return
                        }

                        // success

                        set_state_alert_message("success")
                    }
                }
            >create</button>
        </main>

    </>

}
export default Page_kategorijos