const chars = "zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP123456789"

const generate_random_string = function (param_length)
{
    var random_string = ""

    for (var i = 0; i < param_length; i++)
    {
        // random_index

        const random_number = Math.random() * chars.length
        const random_index = Math.floor(random_number)

        //

        random_string += chars[random_index]
    }

    return random_string
}

export default generate_random_string