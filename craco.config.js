const CracAlias=require("craco-alias");

module.exports={
    plugins:[
        {
            plugin:CracAlias,
            options:{
                source:"jsconfig",
                baseUrl:".",
                tsConfigPath:"jsconfig.json",
            }
        }
    ]
}
