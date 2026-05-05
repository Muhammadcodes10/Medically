export async function PatientDataApi(){
    const temporaryVariable = await fetch("../components/homePage", {
        method: 'GET',
        headers: {
            "content-type": "Application/json"
        },
    })

    if(!temporaryVariable.ok){
        throw new Error("The patient data was not successfully retrieved")
    }
    return temporaryVariable.json()
}


// APIS do not work on react pages because they don't have routes for particular operations and resources. temporaryVariable is
// merely visiting ../components/homePage, but it doesn't know where exactly to go there. The file ../components/homePage does not know what to respond
// with  too.

// Another thing is that ../components/homePage does not have 'detectors' to detect incoming requests. So whatever we do with this API remains unknown to homePage.