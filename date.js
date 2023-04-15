exports.getDate = function ()
    {
        let today = new Date();
        let option = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }
        return today.toLocaleDateString("en-US", option);
     
}

// module.exports send an object which have methods which can be created by use like getDate, getDay.
//user defined method can be created
// module.exports --> exports

exports.getDay = function ()
{
    let today = new Date();
    let option = {
        weekday: "long",
    }
    return today.toLocaleDateString("en-US", option);
}
