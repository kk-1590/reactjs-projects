

const dummyApiResponse = {
    showLightAndDarkMode : true,
    showTicTacToeBoard : true,
    showRandomColorGenrator :true,
    showAccordion : false,
    showTreeView : true,
}

function featureFlagDataServiceCall(){
    return new Promise((resolve,reject) => {
        if(dummyApiResponse){
            setTimeout(resolve(dummyApiResponse),500);            
        }
        else{
            reject("Some error occured! Please try again")
        }
    })
}

export default featureFlagDataServiceCall;