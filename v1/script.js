const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//console.log(CATEGORIES.find((cat) => cat.name === "society").color);

btn.addEventListener("click", function () {
  factsList.innerHTML = "";

  //DB
  loadFacts();

  async function loadFacts() {
    const res = await fetch(
      "https://cfpdccpjjqvemxntynlg.supabase.co/rest/v1/facts",
      {
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmcGRjY3BqanF2ZW14bnR5bmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI2NzEzODgsImV4cCI6MTk4ODI0NzM4OH0.3RlGOKRyKNlyqNSwh5-QVgJ8VDDySuOcgb2MAT8TXkM",
        },
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmcGRjY3BqanF2ZW14bnR5bmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI2NzEzODgsImV4cCI6MTk4ODI0NzM4OH0.3RlGOKRyKNlyqNSwh5-QVgJ8VDDySuOcgb2MAT8TXkM",
      }
    );

    const data = await res.json();
    console.log(data);
    //const filteredData = data.filter((fact) => fact.category === "technology");

    createFactsList(data);
  }

  function createFactsList(dataArray) {
    const htmlArr = dataArray.map(
      (fact) => `<li class="fact"> 
  <p>
    ${fact.text}
    <a
    class="source"
    href="${fact.source}"
    target="_blank">(Source)
    </a>
  </p>
<span class="tag" style="background-color: ${
        CATEGORIES.find((cat) => cat.name === fact.category).color
      }"
  >${fact.category}</span>
</li>`
    );
    console.log(htmlArr);
    const html = htmlArr.join("");
    factsList.insertAdjacentHTML("afterbegin", html);
  }

  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Shared a Fact";
  }
});

console.log([9, 11, 54, 8, 18, 34].filter((el) => el > 10));
console.log([9, 11, 54, 8, 18, 34].find((el) => el > 10));

/* var votesInteresting = 23;
var votesMindlowing = 5;

votesInteresting = votesInteresting + 1;
//console.log(votesInteresting);

let votesFalse = 40;
const isCorrect = votesFalse < votesInteresting;
//console.log(isCorrect);

function calcFactAge(year) {
  const currentYear = 2022;
  const age = currentYear - year;
  return age;
}

const age1 = calcFactAge(2020);
//console.log(age1);

const text = "Hello my little boy";

const upperText = text.toUpperCase();

const message =
  votesInteresting > votesFalse
    ? "Да интересных комментов больше, чем ошибочных"
    : "Нет, ошибочных больше, чем интересных";

//console.log(upperText);

console.log(
  `Этот текст теперь большой "${upperText}" \nРазница между годами: ${age1} года. \n${message}`
);

const calcFactAge2 = () => {
  date = new Date();
  console.log("hello \n" + date);
};
calcFactAge2();

const factObj = {
  text: "Hello my little boy",
  year: 2022,
  createSummary: function () {
    return `Text: ${this.text.toUpperCase()} `;
  },
};

console.log(factObj.text);
console.log(factObj.createSummary());

var arr = [4, 3, 5, 2, 124].forEach(function (el) {
  var a = Math.random().toFixed(2);
  console.log(el * a);
});
console.log("\n");

var arr2 = [2, 4, 6, 1, 2, 23].map(function (el) {
  console.log(el);
});

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return currentYear;
}

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);
console.log(factAges.join(" "));
 */
