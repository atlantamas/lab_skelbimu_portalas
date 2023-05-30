import config_users from "../config/config_users.mjs"

const model_users_count = async function (
    param_username,
    param_limit
)
{
    // query

    const query =
    {
        username: param_username
    }

    // options

    const options =
    {
        limit: param_limit
    }

    // countDocuments

    const result_of_countDocuments =
        await config_users.mongodb_client
            .countDocuments(query, options)

    return result_of_countDocuments
}

export default model_users_count