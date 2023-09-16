function cal_age(birthdate){
    var dob = new Date(birthdate)
    var month_diff = Date.now() - dob.getTime(); 
    var age_dt = new Date(month_diff);
    var year  = age_dt.getUTCFullYear(); 
    var age = Math.abs(year - 1970); 
    return age; 
} 

const player = [
    player1 = {
        name : "Sieng Chanthea", 
        birthdate : "9/September/2002", 
        team : "Al Shahaniya",
        appearance : 28, 
        goal : 5, 
        role : "Winger"
    }, 
    player2 = {
        name : "Soeuy Visal", 
        birthdate : "19/August/1995",
        team : "Preah Khan Reach Svay Rieng",
        appearance : 74, 
        goal : 5, 
        role : "Center Back"
    },
    player3 = {
        name : "Sin Sophanat",
        birthdate : "20/April/1997",
        team : "Visakha Football Club",
        appearance : 3, 
        goal : 1, 
        role : "Center Back"
    }, 
    player4 = { 
        name : "Choun Chanchav", 
        birthdate : "5/May/1999",
        team : "Phnom Penh Crown Football Club",
        appearance : 15, 
        goal : 2, 
        role : "Center Back" 
    },
    player5 = {
        name : "Kan Pisal",
        birthdate : "9/August/1998",
        team : "Boeung Ket Football Club", 
        appearance : 3, 
        goal : 0, 
        role : "Left Back"
    }, 
    player6 = {
        name : "Vann Tailamey", 
        birthdate: "2/April/1999",
        team : "Boueng Ket Football Club"
    }
]