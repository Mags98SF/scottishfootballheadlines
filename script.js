document.addEventListener("DOMContentLoaded", function () {
    // Array of Scottish football clubs
    const clubs = [
        "Celtic", "Rangers", "Aberdeen", "Hearts", "Hibs", "Dundee United", "Motherwell", 
        "Livingston", "Kilmarnock", "Ross County", "St Mirren", "St Johnstone"
    ];

    // Array of Red Top style headlines
    const headlines = [
        "ROCKED BY SHOCK SCANDAL",
        "AT THE CENTRE OF TRANSFER STORM",
        "HUMILIATED IN CHAOTIC CLASH",
        "FANS IN MELTDOWN OVER BOMBSHELL ANNOUNCEMENT",
        "BOSS UNDER FIRE AS TEAM CRISIS DEEPENS",
        "SET FOR BLOCKBUSTER CASH SPLASH IN TRANSFER WINDOW",
        "HIT BY MAJOR CONTROVERSY AS FOOTBALL AUTHORITIES STEP IN",
        "IN SHAMBLES AFTER LAST-MINUTE COLLAPSE",
        "LEFT RED-FACED AFTER SOCIAL MEDIA BLUNDER",
        "FACING LEGAL BATTLE OVER DISPUTED TRANSFER FEE",
        "STADIUM PLANS IN RUINS AFTER FUNDING COLLAPSE",
        "HIT WITH SHOCK POINTS DEDUCTION",
        "BLOCKED FROM EUROPEAN COMPETITION OVER LICENSING ISSUES",
        "FANS THREATEN BOYCOTT AFTER TICKET PRICE HIKE",
        "FLOPS IN PRE-SEASON FRIENDLY AGAINST MINNOWS"
    ];

    // Array of dramatic endings
    const endings = [
        "AS RIVAL FANS MOCK IN BRUTAL TROLLING",
        "AND PUNDITS SAY 'IT'S A TOTAL DISGRACE!'",
        "AS FURIOUS SUPPORTERS DEMAND ANSWERS",
        "LEAVING MANAGER CLUELESS ON HOW TO RESPOND",
        "WITH EMERGENCY MEETING NOW UNDERWAY",
        "FORCING CLUB LEGENDS TO SPEAK OUT",
        "SPARKING WILD CELEBRATIONS AMONG OPPOSITION SUPPORTERS",
        "WITH FURTHER REVELATIONS EXPECTED IN THE COMING DAYS",
        "LEAVING FANS ABSOLUTELY OUTRAGED",
        "AND TV PUNDITS CALL IT ‘A NATIONAL EMBARRASSMENT’"
    ];

    // Function to generate a random headline
    function generateHeadline() {
        const club = clubs[Math.floor(Math.random() * clubs.length)];
        const headline = headlines[Math.floor(Math.random() * headlines.length)];
        const ending = endings[Math.floor(Math.random() * endings.length)];

        document.getElementById("headline").innerText = `${club} ${headline} ${ending}`;
    }

    // Ensure the headline loads immediately on refresh
    generateHeadline();
});
