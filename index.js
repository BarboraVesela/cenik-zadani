const selectPlan = (planNumber) => {
    let plan1Elm = document.querySelector('#plan1');
    let plan2Elm = document.querySelector('#plan2');
    let plan3Elm = document.querySelector('#plan3');
    
    if (planNumber === 1 ){
        plan1Elm.classList.add("plan--selected")
    }else if (plan1Elm.selected != 1){
        plan1Elm.classList.remove("plan--selected")
    }

    if (planNumber === 2){
        plan2Elm.classList.add("plan--selected")
    }else if (plan2Elm.selected != 2){
        plan2Elm.classList.remove("plan--selected")
    }

    if (planNumber === 3){
        plan3Elm.classList.add("plan--selected")
    }else if (plan3Elm.selected != 3){
        plan3Elm.classList.remove("plan--selected")
    }
}