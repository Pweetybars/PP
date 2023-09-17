const players = [
    {
        name : "Sieng Chanthea", 
        birthdate : "9/September/2002", 
        team : "Al Shahaniya",
        appearance : 28, 
        goal : 5, 
        role : "Winger"
    }, 
    {
        name : "Soeuy Visal", 
        birthdate : "19/August/1995",
        team : "Preah Khan Reach Svay Rieng",
        appearance : 74, 
        goal : 5, 
        role : "Center Back"
    },
    {
        name : "Sin Sophanat",
        birthdate : "20/April/1997",
        team : "Visakha Football Club",
        appearance : 3, 
        goal : 1, 
        role : "Center Back"
    }, 
    { 
        name : "Choun Chanchav", 
        birthdate : "5/May/1999",
        team : "Phnom Penh Crown Football Club",
        appearance : 15, 
        goal : 2, 
        role : "Center Back" 
    },
    {
        name : "Kan Pisal",
        birthdate : "9/August/1998",
        team : "Boeung Ket Football Club", 
        appearance : 3, 
        goal : 0, 
        role : "Left Back"
    }, 
    {
        name : "Vann Tailamey", 
        birthdate: "2/April/1999",
        team : "Boueng Ket Football Club",
        appearance : 1,
        goal : 0, 
        role : "Right Back"
    },
    {
        name : "Kouch Sokumpheak",
        birthdate : "15/February/1987",
        team : "Nagaworld Football Club",
        appearance : 68, 
        goal : 7, 
        role : "Midfielder"
    },
    {
        name : "Orn Chanpolin",
        birthdate : "15/March/1998",
        team : "Phnom Penh Crown Football Club",
        appearance : 34, 
        goal : 1, 
        role : "Defensive Midfielder"
    },
    {
        name : "Sin Kakada", 
        birthdate : "29/July/2000",
        team : "Visakha Football Club", 
        appearance : 8, 
        goal : 0, 
        role : "Attacking Midfielder"
    }, 
    {
        name : "Lim Pisoth",
        birthdate : "29/August/2001",
        team : "Phnom Penh Crown Football Club",
        appearance : 17, 
        goal : 2, 
        role : "Winger"
    },
    {
        name : "Hul Kimhuy", 
        birthdate : "7/April/2000",
        team : "Visakha Football Club",
        appearance : 11,
        cleansheet : 0, 
        role : "Goalkeeper"
    },
    {
        name : "Keo Soksela",
        birthdate : "1/August/1997",
        team : "Visakha Football Club",
        appearance : 22, 
        cleansheet : 0, 
        role : "Goalkeeper"
    },
    {
        name : "Chhong Bunnath",
        birthdate : "28/November/1998",
        team : "Nagaworld",
        appearance : 3,
        goal : 0, 
        role : "Center Back"
    },
    {
        name : "Kouch Dani",
        birthdate : "11/October/1990",
        team : "Preah Khan Reach Svay Rieng",
        appearance : 10, 
        goal : 0, 
        role : "Midfielder"
    }, 
    {
        name : "Khoan Soben",
        birthdate : "4/October/2004",
        team : "Boeung Ket Football Club",
        appearance : 1, 
        goal : 0, 
        role : "Center Forward"
    },
    {
        name : "Chantha Chantheaka",
        birthdate : "29/September/2000",
        team : "Boeung Ket Football Club",
        appearance : 1, 
        goal : 0, 
        role : "Left Winger"
    },
    {
        name : "Nick Taylor",
        birthdate : "2/September/1998",
        team : "Preah Khan Reach Svay Rieng",
        appearance : 7, 
        goal : 1, 
        role : "Left Winger" 
    },
    {
        name : "Yeu Muslim",
        birthdate : "25/December/1998",
        team : "Phnom Penh Crown Football Club",
        appearance : 9,
        goal : 0,
        role : "Right Midfielder"
    },
    {
        name : "Chheng Meng",
        birthdate : "27/February/1998",
        team : "Visakha Football Club",
        appearance : 28,
        goal : 0, 
        role : "Left Back"
    },
    {
        name : "Ouk Sovann",
        birthdate : "15/May/1998",
        team : "Visaka Football Club",
        appearance : 10, 
        goal : 0, 
        role : "Center Back"
    },
    {
        name : "Reung Bunheing",
        birthdate : "25/September/1992",
        team : "Visakha Football Club",
        appearance : 16, 
        goal : 4, 
        role : "Center Forward"
    }
]

let playerHTML = " ";
players.forEach((player)=>{
    playerHTML += `<div class="player-container">
    <img class="player-img" src="player picture/${player.name}.jpg" alt="">
    <p>${player.name}</p>
</div>`
})

document.querySelector('.main-container').innerHTML = playerHTML;