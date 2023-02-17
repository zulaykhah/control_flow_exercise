// Declaring of Class Group
let classGroup = "SCIENCE";

// Declaring of various subjects in each class Group
let scienceSubjects = 'Physics, Chemistry, Biology, TechnicalDrawing'; 
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artsSubjects = 'Government, Economics, Literature, History';

// Declaring of General Subjects offered by all
let generalSubjects = 'English, Mathematics, ';

// Making the various Class Group equals to various Subjects offered in each class
let SCIENCE = scienceSubjects;
let SOCIALSCIENCE = socialScienceSubjects;
let ARTS = artsSubjects;


// writing the if...else conditions
if (classGroup == 'SCIENCE' && SCIENCE == scienceSubjects) {
    console.log(generalSubjects + scienceSubjects);

} else if (classGroup == 'SOCIALSCIENCE' && SOCIALSCIENCE == socialScienceSubjects){
    console.log(generalSubjects + socialScienceSubjects);

} else if (classGroup == 'ARTS' && ARTS == artsSubjects) {
    console.log(generalSubjects + artsSubjects);

} else {
    console.log(generalSubjects);
}


