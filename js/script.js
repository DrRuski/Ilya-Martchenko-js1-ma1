
// Question 1

const cat = {
    complain: function(){
        console.log("Meow!")
    }
};
cat.complain();
 


//Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";



// Question 3

heading.style.fontSize = "2em";



// Question 4

heading.className = "subheading";



// Question 5

const paragraph = document.querySelectorAll("p");

for (let i = 0; i < paragraph.length; i++){
    
    paragraph[i].style.color = "red";

}



// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";



// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function randomList(list){

    for (let i = 0; i < list.length; i++){

        const listItem = list[i].name;

        console.log(listItem)

    }

}
randomList(cats);



// Question 8

function createCats(cats){

    for (let i = 0; i < cats.length; i++){
        
        const listItem = cats[i];
        const name = listItem.name;
        
        

        console.log(listItem)

        

    }

}

