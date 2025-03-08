// Arrays of Scottish football-related terms
const subjects = [
    "Celtic", "Rangers", "Aberdeen", "Hearts", "Hibs", "Dundee United", "Motherwell", "Livingston",
    "Kilmarnock", "Ross County", "St Mirren", "St Johnstone",
    "Steve Clarke", "Callum McGregor", "James Tavernier", "Lawrence Shankland",
    "John Beaton (Referee)", "VAR Officials", "Scottish FA", "SPFL Board"
];

const headlines = [
    "ROCKED BY SHOCK SCANDAL",
    "AT THE CENTRE OF TRANSFER STORM",
    "HUMILIATED IN CHAOTIC CLASH",
    "FANS IN MELTDOWN OVER BOMBSHELL ANNOUNCEMENT",
    "BOSS UNDER FIRE AS TEAM CRISIS DEEPENS",
    "STAR PLAYER ‘WANTS OUT’ AFTER EXPLOSIVE DRESSING ROOM ROW",
    "SET FOR BLOCKBUSTER CASH SPLASH IN TRANSFER WINDOW",
    "HIT BY MAJOR CONTROVERSY AS FOOTBALL AUTHORITIES STEP IN",
    "RIPPED APART BY FORMER PLAYER IN BRUTAL VERDICT",
    "IN SHAMBLES AFTER LAST-MINUTE COLLAPSE",
    "LEFT RED-FACED AFTER SOCIAL MEDIA BLUNDER",
    "SET TO AXE STAR IN SHOCK U-TURN",
    "BIZARRE TACTICS LEAVE PUNDITS IN STITCHES",
    "BOSS SLAMS TEAM AS 'WORST PERFORMANCE HE'S EVER SEEN'",
    "STUNS FANS WITH UNBELIEVABLE ANNOUNCEMENT"
];

const endings = [
    "AS RIVAL FANS MOCK IN BRUTAL TROLLING",
    "AND PUNDITS SAY 'IT'S A TOTAL DISGRACE!'",
    "AS FURIOUS SUPPORTERS DEMAND ANSWERS",
    "IN A TWIST THAT NOBODY SAW COMING",
    "LEAVING BOSS FACING THE SACK",
    "WITH LEGENDARY EX-PLAYER ‘LINING UP RETURN’",
    "AS CHAOS ERUPTS BEHIND THE SCENES",
    "WITH STAR PLAYER'S FUTURE NOW IN SERIOUS DOUBT",
    "AS FANS CALL IT ‘THE WORST NEWS EVER’",
    "IN SHOCKING SCENES THAT STUNNED EVERYONE",
    "LEAVING FOOTBALL WORLD COMPLETELY BAFFLED",
    "AS ANGRY BOARD MEMBERS CONFRONT MANAGER",
    "AND EVEN THE PLAYERS CAN’T BELIEVE IT",
    "AS PANIC SETS IN AHEAD OF CRUNCH FIXTURE",
    "WITH MASSIVE FALLOUT EXPECTED IN COMING DAYS"
];

// Function to generate a random sensational headline
function generateHeadline() {
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const headline = headlines[Math.floor(Math.random() * headlines.length)];
    const ending = endings[Math.floor(Math.random() * endings.length)];

    const randomHeadline = `${subject} ${headline} ${ending}`;
    document.getElementById("headline").innerText = randomHeadline;
}

// Generate a headline on page load
window.onload = generateHeadline;
