import mongodb from "mongodb"

export default
    {

        mongodb_client: new mongodb.MongoClient("mongodb+srv://lab_skelbimu_portalas_user1:sDTFg41aRzAAJtui@cluster1.2r1zgpy.mongodb.net/")
            .db("lab_skelbimu_portalas")
            .collection("kategorijos"),

        validate_pavadinimas: function (param_pavadinimas)
        {
            if (param_pavadinimas === undefined) throw new Error("param_pavadinimas undefined")
            if (typeof param_pavadinimas !== "string") throw new Error("param_pavadinimas is not a string")
            if (param_pavadinimas.length < 3) throw new Error("param_pavadinimas too short")
            if (param_pavadinimas.length > 64) throw new Error("param_pavadinimas too long")
        }  
    }