function salary (workhours, overtime) {
    // if statement to ensure that the workhours is not more than 4
    if (workhours > 4){
        let over = workhours - 4
        workhours = 4
        overtime += over 
        console.log(workhours, overtime)
    }
    // calculation of the daily income
    workrate = 1000 * workhours
    overtimeRate = 200 * overtime
    sum = workrate + overtimeRate
    // Print out the daily salary
    console.log(sum)
}
