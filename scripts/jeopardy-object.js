// round one category one question/answers/amounts
let roundOneCategories = [
  {
    id: "Cat1Quest1",
    category: "Chillin’ & Grillin’",
    amount: 200,
    question:
      "Weber is a well-known maker of this essential feature of a backyard barbecue.",
    answer: "What is a grill",
  },

  {
    id: "Cat1Quest2",
    category: "Chillin’ & Grillin’",
    amount: 400,
    question:
      "The name of this flying creature describes slicing a slab of meat nearly in half and unfolding it flat.",
    answer: "What is butterfly?",
  },

  {
    id: "Cat1Quest3",
    category: "Chillin’ & Grillin’",
    amount: 600,
    question:
      "Manual ice cream machines require adding this condiment to the ice before churning the ingredients.",
    answer: "What is salt?",
  },

  {
    id: "Cat1Quest4",
    category: "Chillin’ & Grillin’",
    amount: 800,
    question:
      "This is the term for applying a seasoned liquid while grilling to keep the food soft and moist. ",
    answer: "What is basting (or mopping)?",
  },

  {
    id: "Cat1Quest5",
    category: "Chillin’ & Grillin’",
    amount: 1000,
    question:
      "Salmon is often grilled on this type of wood plank to add flavor. ",
    answer: "What is cedar?",
  },

  // round one category two question/answers/amounts

  {
    id: "Cat2Quest1",
    category: "Familial Ties",
    amount: 200,
    question:
      "Another word for ancestry or pedigree, often applied to royalty.",
    answer: "What is bloodline?",
  },

  {
    id: "Cat2Quest2",
    category: "Familial Ties",
    amount: 400,
    question:
      "Your spouse’s mother, father, sibling, or other relative by marriage.",
    answer: "What is in-law?",
  },

  {
    id: "Cat2Quest3",
    category: "Familial Ties",
    amount: 600,
    question: "Another term for people who share at least one parent.",
    answer: "What is siblings?",
  },

  {
    id: "Cat2Quest4",
    category: "Familial Ties",
    amount: 800,
    question:
      "This church maintains the largest free genealogy resource in the world.",
    answer: "What is Church of Jesus Christ of Latter-Day Saints (or Mormon)?",
  },

  {
    id: "Cat2Quest5",
    category: "Familial Ties",
    amount: 1000,
    question: "This term applies to cousins of different generations.",
    answer: "What is once removed?",
  },

  // round one category Three question/answers/amounts

  {
    id: "Cat3Quest1",
    category: "Ologies",
    amount: 200,
    question: "This is the study of animals.",
    answer: "What is zoology?",
  },

  {
    id: "Cat3Quest2",
    category: "Ologies",
    amount: 400,
    question: "This “ology” is studied in divinity schools.",
    answer: "What is theology?",
  },

  {
    id: "Cat3Quest3",
    category: "Ologies",
    amount: 600,
    question:
      "This science focuses on the relationship between living organisms and the environment.",
    answer: "What is ecology?",
  },

  {
    id: "Cat3Quest4",
    category: "Ologies",
    amount: 800,
    question:
      "This is the study of earthquakes and other stresses within a planet.",
    answer: "What is seismology",
  },

  {
    id: "Cat3Quest5",
    category: "Ologies",
    amount: 1000,
    question:
      "This is the study of the causes and spread of diseases in a population.",
    answer: "What is epidemiology?",
  },

  // round one category four question/answers/amounts

  {
    id: "Cat4Quest1",
    category: "Where’s the School?",
    amount: 200,
    question:
      "Notre Dame, home of the Fighting Irish athletics, is located here.",
    answer: "What is South Bend Indiana?",
  },

  {
    id: "Cat4Quest2",
    category: "Where’s the School?",
    amount: 400,
    question:
      "It is where you can find the University of Alabama’s main campus, home of the Crimson Tide.",
    answer: "What is Tuscaloosa Alabama?",
  },

  {
    id: "Cat4Quest3",
    category: "Where’s the School?",
    amount: 600,
    question:
      "University of Nebraska, home of the Cornhuskers, is in this capital city",
    answer: "What is Lincoln Nebraska?",
  },

  {
    id: "Cat4Quest4",
    category: "Where’s the School?",
    amount: 800,
    question: "It is home to the Volunteers of the University of Tennessee.",
    answer: "What is Knoxville Tennessee?",
  },

  {
    id: "Cat4Quest5",
    category: "Where’s the School?",
    amount: 1000,
    question:
      "This is where a prospective student could find the University of Georgia, home of the Bulldogs.",
    answer: "What is Athens Georgia?",
  },

  // round one category five question/answers/amounts

  {
    id: "Cat5Quest1",
    category: "Happy Birthday, August Baby",
    amount: 200,
    question:
      "Born August 13, 1982, she serves as the White House press secretary.",
    answer: "Who is Sarah Huckabee Sanders?",
  },

  {
    id: "Cat5Quest2",
    category: "Happy Birthday, August Baby",
    amount: 400,
    question:
      "Born August 29, 1915, this Swedish-born actress starred in the 1942 film Casablancaas a woman with two love interests.",
    answer: "Who is Ingrid Bergman?",
  },

  {
    id: "Cat5Quest3",
    category: "Happy Birthday, August Baby",
    amount: 600,
    question:
      "Born August 14, 1945, this comedian is best known for his roles in the 1978 film A Wild and Crazy Guy and the 1979 film The Jerk.",
    answer: "Who is Steve Martin?",
  },

  {
    id: "Cat5Quest4",
    category: "Happy Birthday, August Baby",
    amount: 800,
    question:
      "Born August 6, 1911, this American actress is best known for her role as Ricky’s wife and Ethyl’s best friend.",
    answer: "Who is Lucille Ball?",
  },

  {
    id: "Cat5Quest5",
    category: "Happy Birthday, August Baby",
    amount: 1000,
    question:
      "Born August 25, 1968, this celebrity on Food Network’s 30-Minute Meals introduced us to the term EVOO, which stands for extra-virgin olive oil.",
    answer: "Who is Rachael Ray?",
  },

  // round one category six question/answers/amounts

  {
    id: "Cat6Quest1",
    category: "It Happened One August",
    amount: 200,
    question:
      "On August 2, 1776, fifty-six members of Congress signed this founding document, which is celebrated every Fourth of July.",
    answer: "What is the Declaration of Independence?",
  },

  {
    id: "Cat6Quest2",
    category: "It Happened One August",
    amount: 400,
    question:
      "On August 5, 2001, this happened to the U.S. credit rating for the first time in history.",
    answer: "What is it was downgraded?",
  },

  {
    id: "Cat6Quest3",
    category: "It Happened One August",
    amount: 600,
    question:
      "On August 23, 1989, this Cincinnati Reds manager was expelled from baseball for gambling on the game.",
    answer: "Who is Pete Rose?",
  },

  {
    id: "Cat6Quest4",
    category: "It Happened One August",
    amount: 800,
    question:
      "On August 12, 1990, Susan Hendrickson discovered the skeleton of this huge animal.",
    answer: "What is a dinosaur (or Tyrannosaurus rex)",
  },

  {
    id: "Cat6Quest5",
    category: "It Happened One August",
    amount: 1000,
    question: "On August 27, 1979, the IRA assassinated this British royal.",
    answer: "Who is Lord Mountbatten?",
  },
];
