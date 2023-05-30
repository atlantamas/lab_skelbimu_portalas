import config_users from "../config/config_users.mjs"
import model_users_update from "../models/model_users_update.mjs"
import model_users_read from "../models/model_user_read.mjs"

const controller_sign_out = async function (req, res)
{
    // inputs

    const indentification_token = req.body.identification_token

    const username = req.body.username
    const password = req.body.password

    try
    {
        // validate_inputs

        validate_inputs(username, password)

        // resolve_username

        const result_of_resolve_username =
            await resolve_username(indentification_token)

        const username = result_of_resolve_username

        // model_users_update

        await model_users_update(
            {
                username: username
            },
            {
                identification_token: null
            }
        )

        // success

        res.cookie("identification_token", null, { maxAge:0})

        res.statusCode = 200
        res.end()
    }
    catch (error)
    {
        res.statusCode = 400
        res.json({ message: error.message })
    }

}

//
// validate_inputs
//

const validate_inputs = function (
    param_indentification_token
)
{
    // param_indentification_token

    config_users.validate_identification_token(param_indentification_token)
}

//
// resolve_username
//

const resolve_username = async function (param_indentification_token)
{
    const result_of_model_users_read = model_users_read(
        {
            indentification_token: param_indentification_token
        },
        {
            _id: 0,
            username: 1
        }
    )

    const username = result_of_model_users_read.username

    return username

}

export default controller_sign_out