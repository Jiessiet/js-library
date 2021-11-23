# TableViews Library <br> 
### _js-library-tiechu_

<br>

## Description and Use Cases
<br>
TableViews library generates tables and individual cells that developers can move to act like tables. Cells can act as quizzes, where each cell is assigned a true or false value. Each cell can also be an input field, where developers can receive user input. Cells can also take in math equations from users and output the result. Other types of cells include rating cells (users can submit up to five hearts) and selection cells (users can select one choice to be submitted). Cells are completely customizable by developers, and developers can exercise their creative freedom by setting the position, height and width of cells and tables to suit their website’s needs. Individual cells can act as textboxes, where developers can input bodies of text to display to users. When working with tables, developers only need to input the number of rows and columns, along with the position of the table and the width and length of that table and the library will generate a table contained within the allocated space. Each cell is customizable in its color, inner text and type (input, quiz or equation). Developers only need to specify the row, column, table and change for the cell to be edited. This library can be used towards a variety of web apps, such as school related web apps, shopping web apps, or sports or gaming web apps. Teachers can post quizzes, assign readings and display results with the tables, small business owners can use cells to display product information, get feedback on products and let users calculate cost of purchase. Gaming web apps can use tables to display rankings, give users a way to cast votes and show possible competitive match-ups. 

<br>

## Alpha Release Features

Currently, developers can create individual cells that they can fully manipulate. The types of cells that are available are quizzes, text-displays, and input cells. Developers can also change colors of individual text-display cells. Developers can also generate tables with an unlimited number of rows and columns. They can move the table to any position, as well as change colors of rows, columns, and individual cells within the table. Developers can generate as many tables as they want, as well as cells. For quiz cells, developers can set the value of the cell as true or false, which will allow the cell to change color upon click accordingly. Developers can also set the text within the quiz cells. Users can now participate in quizzes, input their text in input cells, as well as scroll to view tables. To participate in quizzes, users will simply click on the cell that they believe displays the correct answer, and see the accuracy of their submission. To submit their input, users need to type in the input field and click the submit button. 

To see the website, visit: https://blooming-inlet-02629.herokuapp.com/ 
<br>
Users will see a basic school website layout. The first section includes a passage of reading along with a comprehension quiz. Users can leave a review in the form below. The second section includes a generated table of cells. 

<br>

## DOM Manipulations

The library has two main parts, the first which generates individual cells, and the second which generates tables. In the cell generator, the cells array includes all the cells that have been generated. Similarly, the following arrays all contain their respective cell types. 
```
    this.cells = []	//array of divs, buttons, inputs, forms
    this.buttons = []	//array of buttons
    this.userinputs = []	//array of input fields
    this.equations = []	//array of math equations (to be implemented)
    this.forms = []	//array of form fields (for quizzes)
```

How cells are created are shown below;

```
    const cell0paragraph = new TableCellGenerator()
    cell0paragraph.makeHeaderCell('400px', '600px', '100px', '300px', 'Read the following passage and answer the quiz on the right...')
    cell0paragraph.changeCellsColor('#6b705c', 0)
```

Each cell will take in its positions; width, height, top margin and left margin. These are reflected in its position when viewing the web app. The inner text is optional for developers to input, when the text field is empty, an empty cell is displayed. Developers can call the changeCellsColor()function, which will change the cell’s background color. 

In the table generator, a tables array holds all the generated tables as a two-dimensional array of cells. The outer array separates the tables, while the inner array holds all the cells of each table. Tablerows and tablecolumns arrays hold a three-dimensional array. In tablerows, the first array separates the tables, the second dimension separates each row of cells, and the third holds an array of each cell within the rows. Tablecolumns operates the same way, except for columns.

```
    this.largetables = []		//2D array of cells
    this.tablerows = []	//3d array of cells in each row of each table
    this.tablecolumns = []	// 3d array of cells in each column of tables
```

A table is generated using the following code;

```
const table0 = new TableGenerator()
table0.makeTable(9, 3, '600px', '1000px', '900px', '300px')
To change the colors of the entire table, a single row or column, or a single cell, developers will call the following functions;
table0.changeTableColor('pink', 0)
table0.changeColumnColor('lightgreen', 0, 1)
table0.changeRowColor('grey', 0, 0)
table0.changeTableCellColor('lightblue', 0, 8, 2)
```

When changing the color of tables, developers need to pass the new color, the table number, and depending on what they wish to change, the row and/or the column number. 

Creating different cell types uses the following function, and require the same position coordinates as creating text cells;
```
cell1quiz.makeQuizCells('240px', '120px', '150px', '750px','Quiz Option false', false)
cellForm.addUserInput('200px', '100px', '600px', '1040px')
```

## Future Additions

Challenges that I will be working on are adding and deleting rows and columns. I will first implement the ability to modify rows starting at the bottom of tables, and then columns at the right-most side of tables. Afterwards, I will aim to implement modifying rows and columns at any position of the table. I will also work on incorporating more cell types, with equation and selection being my priority, followed by rating cell types. I will also add animations when users interact with quizzes, inputs and equations. Finally, using jQuery, I will generate graphs from the data within tables. 

