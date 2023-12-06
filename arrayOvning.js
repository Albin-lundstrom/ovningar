var names = [
    "Andrew",
    "Peter",
    "Eliza",
    "Kirsten",
    "Jeanette"
];

BIGnames = names.map((name) => {
    return name.toUpperCase()
});

//console.log(BIGnames);

var triangles = [
    { width: 12, height: 22 },
    { width: 21, height: 12 },
    { width: 35, height: 49 },
    { width: 12, height: 50 },
    { width: 20, height: 35 }
];

triangles = triangles.map((ares) => {
    return area = ares.width * ares.height
});

//console.log(triangles);

var movies = [
    { title: "Batman Begins", year: 2005 },
    { title: "Batman", year: 1989 },
    { title: "Batman Returns", year: 1992 },
    { title: "Batman Forever", year: 1995 },
    { title: "Batman & Robin", year: 1997 },
    { title: "Batman: Under the Red Hood", year: 2010 },
    { title: "Batman: The Dark Knight Returns, Part 1", year: 2012 },
    { title: "Batman: Mask of the Phantasm", year: 1993 },
    { title: "Batman: The Movie", year: 1966 },
    { title: "Batman: The Dark Knight Returns, Part 2", year: 2013 }
];

theGoodOnes = movies.filter((time) => {
    return time.year >= 1990 && time.year <= 2000;
});

//console.log(theGoodOnes);


TheBestOnes = movies
    .filter((time) => {
        return time.year >= 2000;
    })
    .map((film) => {
        return film.title;
    });

//console.log(TheBestOnes);

var data = {
    title: "ToDo List",
    tasks: [
        { id: 101, complete: false, priority: "High", title: "Do something" },
        { id: 102, complete: false, priority: "Medium", title: "Do something else" },
        { id: 103, complete: true, priority: "Low", title: "Fix the foo" },
        { id: 104, complete: false, priority: "High", title: "Adjust the bar" },
        { id: 105, complete: true, priority: "High", title: "Fetch the baz" },
        { id: 106, complete: false, priority: "Medium", title: "Clean the apartment" },
        { id: 107, complete: false, priority: "Low", title: "Refactor my code" },
        { id: 108, complete: true, priority: "High", title: "Finish the second assignment" }
    ]
};

let prio = data.tasks
    .filter((todo) => {
        return todo.complete == true || todo.priority  == 'High';
    })
    .map((todo) => {
        return todo.id;
    });

//console.log(prio)

let Todo = data.tasks
    .filter((task) => {
        return task.priority != 'Low' && task.complete !== true
    })

list = Todo.map((task) => {
    return {name: `${task.title} (${task.id})`}
})

console.log(list)