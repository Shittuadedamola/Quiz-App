const playNow=()=>{
    document.getElementById("home").style.display = "none"
    document.getElementById("difficulty").style.display = "flex"
}

const backOne=()=>{
    document.getElementById("home").style.display = "flex"
    document.getElementById("difficulty").style.display = "none"
}

const firstAbout=()=>{
    document.getElementById("home").style.display = "none"
    document.getElementById("about").style.display = "flex"
}

const aboutBack=()=>{
    document.getElementById("home").style.display = "flex"
    document.getElementById("about").style.display = "none"
}

const secondAbout=()=>{
    document.getElementById("difficultyAbout").style.display = "flex"
    document.getElementById("difficulty").style.display = "none"
}

const difficultyBack=()=>{
    document.getElementById("difficultyAbout").style.display = "none"
    document.getElementById("difficulty").style.display = "flex"
}

const examBack=()=>{
    document.getElementById("difficulty").style.display = "flex"
    document.getElementById("easyExam").style.display = "none"
}
var questions = [
    {
        question: "Q.1 What is 3X2?",
        option: ["4", "6", "8", "10"]
    },
    {
        question: "Q.2 How many colors are in the rainbow?",
        option: ["7", "6", "3", "10"]
    },
    {
        question: "Q.3 Where is the Eiffel Tower located?",
        option: ["Berlin, Germany", "Lagos, Nigeria", "Paris, France", "Washington D.C, USA"]
    },
    {
        question: "Q.4 Cristiano Ronaldo is an athlete known for which sport?",
        option: ["Baseball", "Tennis", "Football", "Dart"]
    },
    {
        question: "Q.5 What is a famous movie about a park with dinosaurs?",
        option: ["Home Alone", "Fast & Furious", "Squid Game", "Jurassic Park"]
    },
    {
        question: "Q.6 Who is Simba's dad?",
        option: ["Scar", "Shenzi", "Mufasa", "Pumbaa"]
    },
    {
        question: "Q.7 What are the primary colors?",
        option: ["Red, blue and yellow", "Brown, purple and red", "Pink, blue and violet", "Green, black and red"]
    },
    {
        question: "Q.8 What does a thermometer measure?",
        option: ["Pressure", "Temperature", "Wind direction", "Humidity"]
    },
    {
        question: "Q.9 What do bees make?",
        option: ["Salt", "Honey", "Sugar", "Water"]
    },
    {
        question: "Q.10 What is the yellow part of an egg called?",
        option: ["Shell", "Yolk", "Albumen", "Chalazae"]
    }
]

var s = 1
var t = 1
var u = 1
var v = 1
var w = 1
var x = 0

const easyQuiz=()=>{
    document.getElementById("easyExam").style.display = "flex"
    document.getElementById("difficulty").style.display = "none"
    document.getElementById("level").innerHTML = "Easy"
    document.getElementById("question").innerHTML = questions[0].question
    document.getElementById("optOne").innerHTML = questions[0].option[0]
    document.getElementById("optTwo").innerHTML = questions[0].option[1]
    document.getElementById("optThree").innerHTML = questions[0].option[2]
    document.getElementById("optFour").innerHTML = questions[0].option[3]
}

const easyNext=()=>{
    document.getElementById("question").innerHTML = questions[s++].question
    document.getElementById("optOne").innerHTML = questions[t++].option[0]
    document.getElementById("optTwo").innerHTML = questions[u++].option[1]
    document.getElementById("optThree").innerHTML = questions[v++].option[2]
    document.getElementById("optFour").innerHTML = questions[w++].option[3]
    // document.getElementById("buttonA").style.backgroundColor = "rgb(17, 1, 91)"
    // document.getElementById("buttonB").style.backgroundColor = "rgb(17, 1, 91)"
    // document.getElementById("buttonC").style.backgroundColor = "rgb(17, 1, 91)"
    // document.getElementById("buttonD").style.backgroundColor = "rgb(17, 1, 91)"

    if ((document.getElementById("question").innerHTML === questions[1].question) && (document.getElementById("buttonA").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[1].question) && (document.getElementById("buttonB").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 1
    }

    else if ((document.getElementById("question").innerHTML === questions[1].question) && (document.getElementById("buttonC").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[1].question) && (document.getElementById("buttonD").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }



    else if ((document.getElementById("question").innerHTML === questions[2].question) && (document.getElementById("buttonA").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 1
    }

    else if ((document.getElementById("question").innerHTML === questions[2].question) && (document.getElementById("buttonB").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[2].question) && (document.getElementById("buttonC").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[2].question) && (document.getElementById("buttonD").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }



    else if ((document.getElementById("question").innerHTML === questions[3].question) && (document.getElementById("buttonA").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[3].question) && (document.getElementById("buttonB").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[3].question) && (document.getElementById("buttonC").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 1
    }

    else if ((document.getElementById("question").innerHTML === questions[3].question) && (document.getElementById("buttonD").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }



    else if ((document.getElementById("question").innerHTML === questions[4].question) && (document.getElementById("buttonA").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[4].question) && (document.getElementById("buttonB").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[4].question) && (document.getElementById("buttonC").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 1
    }

    else if ((document.getElementById("question").innerHTML === questions[4].question) && (document.getElementById("buttonD").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }



    else if ((document.getElementById("question").innerHTML === questions[5].question) && (document.getElementById("buttonA").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[5].question) && (document.getElementById("buttonB").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[5].question) && (document.getElementById("buttonC").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[5].question) && (document.getElementById("buttonD").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 1
    }



    else if ((document.getElementById("question").innerHTML === questions[6].question) && (document.getElementById("buttonA").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[6].question) && (document.getElementById("buttonB").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }
    
    else if ((document.getElementById("question").innerHTML === questions[6].question) && (document.getElementById("buttonC").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 1
    }

    else if ((document.getElementById("question").innerHTML === questions[6].question) && (document.getElementById("buttonD").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }



    else if ((document.getElementById("question").innerHTML === questions[7].question) && (document.getElementById("buttonA").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 1
    }

    else if ((document.getElementById("question").innerHTML === questions[7].question) && (document.getElementById("buttonB").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[7].question) && (document.getElementById("buttonC").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[7].question) && (document.getElementById("buttonD").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }



    else if ((document.getElementById("question").innerHTML === questions[8].question) && (document.getElementById("buttonA").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }
    
    else if ((document.getElementById("question").innerHTML === questions[8].question) && (document.getElementById("buttonB").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 1
    }

    else if ((document.getElementById("question").innerHTML === questions[8].question) && (document.getElementById("buttonC").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[8].question) && (document.getElementById("buttonD").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }



    else if ((document.getElementById("question").innerHTML === questions[9].question) && (document.getElementById("buttonA").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
        document.getElementById("easySubmit").style.display = "block"
        document.getElementById("easyNext").style.display = "none"
    }
    
    else if ((document.getElementById("question").innerHTML === questions[9].question) && (document.getElementById("buttonB").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 1
        document.getElementById("easySubmit").style.display = "block"
        document.getElementById("easyNext").style.display = "none"
    }

    else if ((document.getElementById("question").innerHTML === questions[9].question) && (document.getElementById("buttonC").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
        document.getElementById("easySubmit").style.display = "block"
        document.getElementById("easyNext").style.display = "none"
    }

    else if ((document.getElementById("question").innerHTML === questions[9].question) && (document.getElementById("buttonD").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
        document.getElementById("easySubmit").style.display = "block"
        document.getElementById("easyNext").style.display = "none"
    }



    else if ((document.getElementById("question").innerHTML === questions[10].question) && (document.getElementById("buttonA").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }
    
    else if ((document.getElementById("question").innerHTML === questions[10].question) && (document.getElementById("buttonB").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 1
    }

    else if ((document.getElementById("question").innerHTML === questions[10].question) && (document.getElementById("buttonC").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("question").innerHTML === questions[10].question) && (document.getElementById("buttonD").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    // if (document.getElementById("question").innerHTML === "Q.10 What is the yellow part of an egg called?") {
    //     document.getElementById("examSubmit").style.display = "block"
    // }

    document.getElementById("buttonA").style.backgroundColor = "rgb(17, 1, 91)"
    document.getElementById("buttonB").style.backgroundColor = "rgb(17, 1, 91)"
    document.getElementById("buttonC").style.backgroundColor = "rgb(17, 1, 91)"
    document.getElementById("buttonD").style.backgroundColor = "rgb(17, 1, 91)"
}

const easySubmit=()=>{
    if ((document.getElementById("buttonA").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }
    
    else if ((document.getElementById("buttonB").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 1
    }

    else if ((document.getElementById("buttonC").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    else if ((document.getElementById("buttonD").style.backgroundColor === "rgb(17, 1, 151)")) {
        document.getElementById("yourScore").innerHTML = parseInt(document.getElementById("yourScore").innerHTML) + 0
    }

    document.getElementById("easyExam").style.display = "none"
    document.getElementById("easyResult").style.display = "flex"

    if (document.getElementById("yourScore").innerHTML <= 5) {
        document.getElementById("yourScore").innerHTML = "Your score is " + document.getElementById("yourScore").innerHTML + ". You can do better"
    }

    else if (document.getElementById("yourScore").innerHTML > 5) {
        document.getElementById("yourScore").innerHTML = "Your score is " + document.getElementById("yourScore").innerHTML + ". Keep it up"
    }
}

const easyHome=()=>{
    document.getElementById("easyResult").style.display = "none"
    document.getElementById("home").style.display = "flex"
}

const buttonA=()=>{
    document.getElementById("buttonA").style.backgroundColor = "rgb(17, 1, 151)"
    document.getElementById("buttonB").style.backgroundColor = "rgb(17, 1, 91)"
    document.getElementById("buttonC").style.backgroundColor = "rgb(17, 1, 91)"
    document.getElementById("buttonD").style.backgroundColor = "rgb(17, 1, 91)"
}

const buttonB=()=>{
    document.getElementById("buttonA").style.backgroundColor = "rgb(17, 1, 91)"
    document.getElementById("buttonB").style.backgroundColor = "rgb(17, 1, 151)"
    document.getElementById("buttonC").style.backgroundColor = "rgb(17, 1, 91)"
    document.getElementById("buttonD").style.backgroundColor = "rgb(17, 1, 91)"
}

const buttonC=()=>{
    document.getElementById("buttonA").style.backgroundColor = "rgb(17, 1, 91)"
    document.getElementById("buttonB").style.backgroundColor = "rgb(17, 1, 91)"
    document.getElementById("buttonC").style.backgroundColor = "rgb(17, 1, 151)"
    document.getElementById("buttonD").style.backgroundColor = "rgb(17, 1, 91)"
}

const buttonD=()=>{
    document.getElementById("buttonA").style.backgroundColor = "rgb(17, 1, 91)"
    document.getElementById("buttonB").style.backgroundColor = "rgb(17, 1, 91)"
    document.getElementById("buttonC").style.backgroundColor = "rgb(17, 1, 91)"
    document.getElementById("buttonD").style.backgroundColor = "rgb(17, 1, 151)"
}