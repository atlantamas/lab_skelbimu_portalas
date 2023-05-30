import config_users from "../config/config_users.mjs"

const model_users_read = async function (
    param_query,
    param_projection
)
{
    // query

    const query = param_query
   
    // projection

    const projection = param_projection

    // skip

    // limit

    // sort

    // options

    const options =
    {
        projection: projection
    }

    // findOne
    const result_of_findOne =
        await config_users.mongodb_client
            .findOne(query, options)

    // error: does not exists

    if (result_of_findOne === null) throw new Error("does not exists")

    // success

    const document = result_of_findOne

    return document
}

export default model_users_read