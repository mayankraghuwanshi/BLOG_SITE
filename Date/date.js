module.exports = function date(){
    let actualdate = new Date();
    let day = actualdate.getDay()+5;
    if(day<10){
        day =`0${actualdate.getDay()+5}`
    }
    let month = actualdate.getMonth()+1;
    if(month<10){
        month = `0${actualdate.getMonth()+1}`
    }
    let year = actualdate.getFullYear();
    return `${day}/${month}/${year}`;
}