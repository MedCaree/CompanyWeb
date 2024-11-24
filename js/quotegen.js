const text = document.getElementById("quoteTexT");

text.addEventListener("click", function() {

    let quotes = [
        "Happiness is not something ready-made. It comes from your own actions. — Dalai Lama",
        "For every minute you are angry you lose sixty seconds of happiness. — Ralph Waldo Emerson",
        "Sadness is but a wall between two gardens. — Khalil Gibran",
        "Tears are words that need to be written. — Paulo Coelho",
        "Pride is not about being better than others, but about being the best version of yourself. — Brene Brown",
        "The way to know your worth is to act like you’re worthy. — Beyoncé",
        "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight. — Benjamin Franklin",
        "It’s okay to be nervous. That means you’re about to do something really brave. — Sarah Dessen",
        "For every minute you are angry, you lose sixty seconds of happiness. — Ralph Waldo Emerson",
        "Holding onto anger is like drinking poison and expecting the other person to die. — Buddha",
        "Fatigue is the best pillow. — Benjamin Franklin",
        "Sometimes the most productive thing you can do is relax. — Mark Black",
        "Disappointment is a sort of bankruptcy – the bankruptcy of a soul that expends too much in hope and expectation. — Eric Hoffer",
        "The disappointment of someone you love is more painful than your own. — William Shakespeare",
        "Fear is the little death that brings total obliteration. — Frank Herbert",
        "Do one thing every day that scares you. — Eleanor Roosevelt",
        "Confusion is the welcome mat at the door of creativity. — Michael J. Gelb",
        "The only true wisdom is in knowing you know nothing. — Socrates",
        "The excitement is in the journey, not the destination. — Arthur Ashe",
        "If you’re not excited about your life, you’re doing it wrong. — Tony Robbins"


    ]

    const quoteGen = document.querySelector(".textMessage")
    quoteGen.textContent = quotes[Math.floor(Math.random()*quotes.length)]
})