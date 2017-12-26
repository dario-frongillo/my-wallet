export function getError(errorDetail,messages){
    debugger;
    if(errorDetail && errorDetail.title && errorDetail.detail){
        return {
            title:errorDetail.title,
            detail:errorDetail.detail
        }
    }else{
        return {
            title:messages['app.endoint.genericError.title'],
            detail:messages['app.endoint.genericError.detail']
        }

    }

}

export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}