function saturdayFun(activity) {
    switch(activity){
        case 'bathe my dog':
            return `This Saturday, I want to ${activity}!`;
            default:
                return "This Saturday, I want to roller-skate!"
    }
  }
  
  function mondayWork(job) {
    switch(job){
        case 'work from home':
            return `This Monday, I will ${job}.`;
            default:
                return "This Monday, I will go to the office."
    }
  
  }
  
  function wrapAdjective(highlight) {
    const savedHighlight = highlight === undefined? "*": highlight
    return function(adjective) {
        return "You are " + savedHighlight + adjective + savedHighlight + "!"
    }
  }
  