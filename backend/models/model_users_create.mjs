import config_users from "../config/config_users.mjs"

const model_users_create = async function (
    param_username,
    param_password
)
{
    // document

    const document =
    {
        username: param_username,
        password: param_password,
        identification_token: null,
        patikusiu_skelbimu_sarasas: []
    }

    // createOne

    const result_of_createOne =
        await config_users.mongodb_client
            .insertOne(document)
}

export default model_users_create