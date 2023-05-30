import React from "react"
import Alert from "./Alert.jsx"
import Overlay from "./Overlay.jsx"
import Page_kategorijos from "./pages/Page_kategorijos.jsx"
import Page_sign_in from "./pages/Page_sign_in.jsx"
import Page_sign_up from "./pages/Page_sign_up.jsx"

var state_page
export var set_state_page

export var state_username
export var set_state_username

const App = function ()
{
    // states

    [state_page, set_state_page] = React.useState("Page_sign_in")

    [state_username, set_state_username] = React.useState(null)
    //

    return <>
        {
            function ()
            {
                if (state_page === "Page_sign_in") 
                {
                    return <Page_sign_in
                        set_state_page={set_state_page}
                    ></Page_sign_in>
                }

                if (state_page === "Page_sign_up") 
                {
                    return <Page_sign_up
                        set_state_page={set_state_page}
                    ></Page_sign_up>
                }

                f(state_page === "Page_kategorijos")
                {
                    return <Page_kategorijos
                        set_state_page={set_state_page}
                    ></Page_kategorijos>
                }

            }()
        }
        <Overlay></Overlay>

        <Alert></Alert>
    </>
}
export default App