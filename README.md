<h1>
Getting Started
</h1>
<p>
            TableViews library generates tables and individual cells that developers can move to act like tables.
            Cells can act as textboxes, where developers can input bodies of text to display to users.
            Cells can also act as quizzes, where each cell is assigned a true or false value. 
            Each cell can also be an input field, where developers can receive user input.
            There are also rating cells (users can submit up to five hearts) and selection cells (users can select one choice to be submitted). 
            Cells are completely customizable by developers, and developers can exercise their creative freedom by setting the position, 
            height and size of cells and tables to suit their website needs. 
            When working with tables, first set the width and length, as well as choose the cell theme.
            Developers only need to input the number of rows and columns, along with the position of the table and the library will generate a table 
            contained within the allocated space. 
            Each cell within the table is customizable in its color, inner text and type (text, input, quiz, rating, selection). 
            Developers only need to specify the row, column, table and change for the cell to be edited. 
            <br></br>
            To get started, call the scripts below in your code;    
            
                <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script defer type="text/javascript" src='tableViews.js'> </script>
                <script defer type="text/javascript" src='your-js-file.js'> </script>
<p>
            A code snippet of a basic cell and table are shown below;
</p>
            
                const cells = new TableCellGenerator()  //making cells
                const tables = new TableGenerator()     //making tables

                const texts = [['Cell0', 'Cell1'], ['Cell2', 'Cell3'], ['Cell4', 'Cell5']]  //these will be what the cells in the table displays
                cells.makeCell('300px', '80px', '100px', '100px', 'TableViews', false)  // a cell has been created with the word TableViews. 
                                                                                        //To make the TableViews cell draggable, change false to true
                
                tables.setSizeTheme('500', '300', false)   //this sets the sizing theme of tables. To change to a table with small cells, change false to true.
                tables.makeTable(3, 2, '300px', '100px', true, 't', texts)  //this makes a table with the texts array displayed in each cell. 
                //To change the type of the cell, change 't' to another one below;

                //S - selection
                //I - input
                //B - quiz
                //H - rating
<h2>
<br></br>
Links
</h2>
<p>
See the Link below for a in-depth explaination of the library and customizations avaliable.
            <br></br>
Landing Page Link: https://blooming-inlet-02629.herokuapp.com
        <br></br>
Documentation Link: https://blooming-inlet-02629.herokuapp.com/documentation.html
            
</p>
            
