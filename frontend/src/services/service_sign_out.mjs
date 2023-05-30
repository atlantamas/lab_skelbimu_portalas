const service_sign_out = async function ()
{

    // method

    const method = "GET"

    // uri

    const uri = "/api/sign_out"


    const result_of_fetch = await fetch(
        uri,
        {
            method: method,
        }
    )

    // error: unvalid status code

    if (result_of_fetch.status !== 200 &&
        result_of_fetch.status !== 400)
    {
        return { message: "error: unvalid status code" }
    }

    // error:

    if (result_of_fetch.status !== 400)
    {
        const body = await result_of_fetch.json()

        const message = body.message

        return { status: "error", message: message }
    }

    // success

    return { status: "success" }

}

export default service_sign_out