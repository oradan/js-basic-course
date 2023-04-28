### 1. Count the number of people in the peeps array.

EX : ```const nrOfPeople = 12```

###  2. List full names of people in a new array of strings.

EX:  ```const fullNamesArr = ['Jerod Smith', 'Jen Jones', 'Terrance Adams']```

### 3. Return “true” if everyone is older than 24.

EX:  ```const adults = true```

### 4. Return “true” if at least one person is younger than 26.

EX: ```const minors = true```

### 5. Return a new array called “young peeps” of all peeps less than 30.

Example of returned array:
```json
[
    {
        "name": {
            "first": "Jerod",
            "last": "Smith"
        },
        "age": 25,
        "id": 1
    },
    {
        "name": {
            "first": "Terrance",
            "last": "Adams"
        },
        "age": 26,
        "id": 3
    }
]
```
### 6. Sort the peeps by age from oldest to youngest in an new array called “sortedPeeps”.

Example of returned array:

```json
[
    {
        "name": {
            "first": "Jerod",
            "last": "Smith"
        },
        "age": 25,
        "id": 1
    },
    {
        "name": {
            "first": "Terrance",
            "last": "Adams"
        },
        "age": 26,
        "id": 3
    },
    {
        "name": {
            "first": "Jen",
            "last": "Jones"
        },
        "age": 30,
        "id": 2
    }
]
```
### 7. Create a new array called “firstNamePeeps” with only the first names of the peeps.

EX: ```const firstNamePeeps = ["Jerod", "Jen","Terrance"]```

## HARDER CHALLENGES (using the comments object and peeps array)

### 1. List all the comments text  in an array of strings called “commentsTextArray” use array.push() or even harder use array.map()
 
 EX: ```const commentsTextArray = ["I love pizza more than everyone!", "I love pizza!", "Much better than last time!", "Best service ever!", "This was gross!", "Burgers are best.",  "Bears eat beets."]```

### 2. Return all comments with the word “love” in the comment text in a new array called “loveComments”

EX: ```const loveComments = ["I love pizza more than everyone!", "I love pizza!"]```

### 3. List all the comments in an array called “sortedCommentsArray" from lowest rating to highest rating. Ignore comments without a rating.

Example of returned array: 

```json
[
    {
        "text": "This was gross!",
        "userId": 3,
        "rating": 1
    },
    {
        "text": "Bears eat beets.",
        "userId": 3,
        "rating": 3
    },
    {
        "text": "I love pizza!",
        "userId": 1,
        "rating": 4
    },
    {
        "text": "Burgers are best.",
        "userId": 3,
        "rating": 4
    },
    {
        "text": "I love pizza more than everyone!",
        "userId": 1,
        "rating": 5
    },
    {
        "text": "Best service ever!",
        "userId": 2,
        "rating": 5
    }
]
```

### 4. Return a new object called “commentObj” with the comment id as a key and the comment text as the value.

Example of returned object: 
```json
{
    "123": "I love pizza more than everyone!",
    "293": "I love pizza!",
    "415": "Much better than last time!",
    "1561": "Best service ever!",
    "1899": "This was gross!",
    "4223": "Burgers are best.",
    "4267": "Bears eat beets."
}
```

### 5. Return a new object called “groupedRatings” with the rating as a key and an array of comments text with that rating as the value. Ignore comments without a rating.

Example of returned object: 

```json
{
    "1": ["This was gross!"],
    "3": ["Bears eat beets."],
    "4": ["I love pizza!", "Burgers are best."],
    "5": ["I love pizza more than everyone!", "Best service ever!"]
}
```
### 6. Return the average rating of all comments.

EX: ```const ratingAVG = 4```

### 7. Group all comments by the user who made the comment. Return a new object called “groupedPeepComments” with the user’s first and last name as a camelcase string key. The value of each object should be an array of comment objects by the person.

Example of returned object: 

```json
{
    "jerodSmith": [
        {
            "text": "I love pizza more than everyone!",
            "userId": 1,
            "rating": 5
        },
        {
            "text": "I love pizza!",
            "userId": 1,
            "rating": 4
        }
    ],
    "jenJones": [
        {
            "text": "Best service ever!",
            "userId": 2,
            "rating": 5
        }
    ],
    "terranceAdams": [
        {
            "text": "Much better than last time!",
            "userId": 3
        },
        {
            "text": "This was gross!",
            "userId": 3,
            "rating": 1
        },
        {
            "text": "Burgers are best.",
            "userId": 3,
            "rating": 4
        },
        {
            "text": "Bears eat beets.",
            "userId": 3,
            "rating": 3
        }
    ]
}

```