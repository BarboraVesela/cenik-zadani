const selectPlan = (planNumber) => {
    let plan1Elm = document.querySelector('#plan1');
    let plan2Elm = document.querySelector('#plan2');
    let plan3Elm = document.querySelector('#plan3');
    
    if (plan1Elm.selected == True){
        plan1Elm.classList.add("plan--selected")
    }else if (plan1Elm.selected == False){
        plan1Elm.classList.remove("plan--selected")
    }

    if (plan2Elm.selected == True){
        plan2Elm.classList.add("plan--selected")
    }else if (plan2Elm.selected == False){
        plan2Elm.classList.remove("plan--selected")
    }

    if (plan3Elm.selected == True){
        plan3Elm.classList.add("plan--selected")
    }else if (plan3Elm.selected == False){
        plan3Elm.classList.remove("plan--selected")
    }
}
    
