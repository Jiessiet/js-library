"use strict";

(function(global, document, $) {    //jQuery call

function TableCellGenerator(){
    this.cells = []
    this.buttons = []
    this.userinputs = []
    this.equations = []
    this.forms = []
    this.width = ''
    this.height = ''
}
const defaultColor = 'lightgray'
let cellNumber = 0;
let inputNum = 0;
let buttonNum = 0;
let formNum = 0;
let selectionNum = 0;
let heartNum = 0;

let mousePosition;
let offset = [0,0];
let isDown = false;


function _draggable(cell_id){
    const cell = document.getElementById(cell_id)   
    cell.addEventListener('mouseover', function(e){
        $(document).ready()     //jQuery call
        $('div#'+cell.id).css('cursor', 'move');    //jQuery call
    }) 
    cell.addEventListener('mousedown', function(e) {

        if(cell.id.includes('T')){
            var c = cell.getBoundingClientRect();
            var bottom = c.bottom;
            var right = c.right;

            if(e.clientY >= bottom+20 || e.clientY <= bottom-20 && e.clientX >= right+20 || e.clientX <= right-20){
        
            isDown=true;
            offset = [
                cell.offsetLeft - e.clientX,
                cell.offsetTop - e.clientY
            ];

            }
        }
        else{
            isDown=true;
            offset = [
                cell.offsetLeft - e.clientX,
                cell.offsetTop - e.clientY
            ];
        }
        
    }, true);

    cell.addEventListener('mouseup', function() {
        isDown = false;
    }, false);
    
    
    cell.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {
    
                x : event.clientX,
                y : event.clientY
    
            };
            cell.style.left = (mousePosition.x + offset[0]) + 'px';
            cell.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}    

TableCellGenerator.prototype = {
    makeCell: function(width, height, top, left, words, drag){
        const cell = document.createElement('div')
        cell.id = cellNumber+'C'
        cellNumber++
        const body = $('body')  //jQuery call
        cell.style = `
            border-radius: 15px; 
            border: 1px solid black; 
            box-sizing: border-box; 
            margin: 10px`
        cell.style.width = width
        cell.style.height = height
        cell.style.position = 'absolute'
        cell.style.backgroundColor = defaultColor
		cell.style.top = top
        cell.style.left = left
        cell.style.overflow = "auto"
        cell.style.textAlign = 'center'
        cell.innerText = typeof words !== 'undefined' ? words : ''

        body.append(cell)		
		this.cells.push(cell)
        if(drag){
            _draggable(cell.id)}
	},

	changeCellsColor: function(color, cell) {
		this.cells[cell].style.backgroundColor = color
	},

    addUserInput: function(width, height, top, left, drag){
        const form = document.createElement('div')
        form.id = formNum + 'F'
        formNum++
        form.style.display = 'flex'
        form.style.flexDirection = 'row'
        form.style.width = width
        form.style.height = height
        form.style.top = top
        form.style.left = left
        form.style.position = 'absolute'

        const input = document.createElement("input")
        input.id = 'input' + inputNum
        inputNum++
        const defaultColor = 'pink'
        input.type = 'text'
        input.style = 'border-radius: 15px; border: 1px solid black; box-sizing: border-box; margin: 10px;'
        
        input.style.backgroundColor = defaultColor
        input.placeholder = 'enter your text here'
        input.style.textIndent = '10px'

        input.addEventListener("mouseover", func, false);
        input.addEventListener("mouseout", func1, false);

        function func()
        { 
            input.style.backgroundColor = 'lightgray'
        }

        function func1()
        {  
            input.style.backgroundColor = defaultColor
        }

        const submit = document.createElement('button')
        submit.id = buttonNum+'B'
        buttonNum++
        submit.style = 'border-radius: 15px; border: 1px solid black; box-sizing: border-box; margin: 10px;'

        submit.innerText = 'submit'
        let value = ''

        const event = new Event('build');

        submit.addEventListener('click', (e) => {
            e.preventDefault()
            value = input.value
            console.log(value)
        })

        form.appendChild(input)
        form.appendChild(submit)

        const body = $('body')  //jQuery call
        body.append(form)
		this.cells.push(form)
        if(drag){
            _draggable(form.id)
            _draggable(input.id)}
        return value

    },

    makeHeaderCell: function(width, height, top, left, words){
        const cell = document.createElement('div')
        cell.id = cellNumber+'C'
        cellNumber++
        cell.style = `
            border-radius: 15px; 
            border: 1px solid black; 
            box-sizing: border-box; 
            padding: 20px
            `

        cell.style.width = width
        cell.style.height = height
        cell.style.backgroundColor = defaultColor
		cell.style.top = top
        cell.style.left = left
        cell.style.textAlign = 'center'
        cell.style.position = 'absolute'
        // cell.style.textIndent = '35px'
        cell.innerHTML = typeof words !== 'undefined' ? words : ''

        const body = $('body')  //jQuery call
        body.append(cell)
		
		this.cells.push(cell)
    },

    makeQuizCells: function(width, height, top, left, text, value){
        const button = document.createElement('button')
        button.id = buttonNum + 'B'
        buttonNum++
        button.style.backgroundColor = defaultColor
        button.style.padding = '5px'
        button.style.position = 'absolute'
        button.style.width = width
        button.style.height = height
        button.style.top = top
        button.style.left = left

        button.textContent = text

        button.addEventListener("click", func);

        function func()
        { 
            if(button.style.backgroundColor == defaultColor && value){
                button.style.backgroundColor = 'lightgreen'
                button.innerHTML = value
            }
            else if(!value){
                button.style.backgroundColor = defaultColor
                button.style.backgroundColor = 'pink'
                button.innerHTML = value
            }
        }

        const body = $('body')  //jQuery call
		body.append(button)
		
		this.cells.push(button)
    },

    makeSelectionCells: function(width, height, top, left, array, drag){
        const cell = document.createElement("select");
        cell.id = selectionNum+'S'
        selectionNum++
        cell.style = `
            border-radius: 15px; 
            border: 1px solid black; 
            box-sizing: border-box; 
            margin: 10px`
        cell.style.width = width
        cell.style.height = height
        cell.style.position = 'absolute'
        cell.style.backgroundColor = defaultColor
		cell.style.top = top
        cell.style.left = left
        cell.style.overflow = "auto"
        cell.style.textAlign = 'center'

        const body = $('body')  //jQuery call
        body.append(cell);

        for (let i of array) {
            const option = document.createElement("option");
            option.value = i;
            option.text = i;
            cell.appendChild(option);
        }
        this.cells.push(cell)
        if(drag){
        _draggable(cell.id)}
    },

    makeHeartsCell: function(width, height, top, left, drag){
        const cell = document.createElement('div')
        cell.id = heartNum+'H'
        heartNum++

        const body = $('body')  //jQuery call
        cell.style = `
        border-radius: 15px; 
        box-sizing: border-box; 
        padding: 3px;
        display: flex;
        flex-grow: row;
        justify-content:  space-between;
        overflow: hidden;
            `
        cell.style.width = width
        cell.style.height = height
        cell.style.position = 'absolute'
        cell.style.backgroundColor = defaultColor
		cell.style.top = top
        cell.style.left = left
        cell.style.overflow = "auto"
        cell.style.textAlign = 'center'
        
        const h1 = document.createElement('div')
        h1.id = cell.id+'1'
        h1.style.overflow = "auto"
        h1.style.position = 'static'
        h1.style.width = (parseInt(width)/4)+'px'
        h1.innerHTML=`<font size="15"> ♡ </font>`;
        
        const h2 = document.createElement('div')
        h2.id = cell.id+'2'
        h2.style.position = 'static'
        h2.style.overflow = "auto"
        h2.style.width = (parseInt(width)/4)+'px'
        h2.innerHTML=`<font size="15"> ♡ </font>`
        
        const h3 = document.createElement('div')
        h3.id = cell.id+'3'
        h3.style.position = 'static'
        h3.style.overflow = "auto"
        h3.style.width = (parseInt(width)/4)+'px'
        h3.innerHTML=`<font size="15"> ♡ </font>`

        let rating = 0

        h1.addEventListener('click', function(e){  
            h1.innerHTML=`<font size="15"> ❤️ </font>`
            h2.innerHTML=`<font size="15"> ♡ </font>`
            h3.innerHTML=`<font size="15"> ♡ </font>`
            rating = 1
            console.log('rating of ' + cell.id + " is " + rating)
        })

        h2.addEventListener('click', function(){
            h1.innerHTML=`<font size="15"> ❤️ </font>`
            h2.innerHTML=`<font size="15"> ❤️ </font>`
            h3.innerHTML=`<font size="15"> ♡ </font>`
            rating = 2
            console.log('rating of ' + cell.id + " is " + rating)
        })

        h3.addEventListener('click', function(){
            h1.innerHTML=`<font size="15"> ❤️ </font>`
            h2.innerHTML=`<font size="15"> ❤️ </font>`
            h3.innerHTML=`<font size="15"> ❤️ </font>`
            rating = 3
            console.log('rating of ' + cell.id + " is " + rating)
        })

        h1.addEventListener('mouseover', function(){
            $(document).ready() //jQuery call
            $('div#'+h1.id).css('cursor', 'pointer');//jQuery call
        })
        h2.addEventListener('mouseover', function(){
            $(document).ready() //jQuery call
            $('div#'+h2.id).css('cursor', 'pointer');   //jQuery call
        })
        h3.addEventListener('mouseover', function(){
            $(document).ready() //jQuery call
            $('div#'+h3.id).css('cursor', 'pointer');   //jQuery call
        })

        cell.appendChild(h1)
        cell.appendChild(h2)
        cell.appendChild(h3)
        body.append(cell)		
		this.cells.push(cell)

        if(drag){
            _draggable(cell.id)
        }
        return rating
        
    },

    setCells: function(width, height, top, left, type, option1, option2){
        if(type.toUpperCase() == 'S'){
            this.makeSelectionCells(width, height, top, left, option1)
        }
        else if(type.toUpperCase() == 'B'){
            this.makeQuizCells(width, height, top, left, option1, option2)
        }
        else if(type.toUpperCase() == 'H'){
            this.makeHeartsCell(width, height, top, left)
        }
        else if(type.toUpperCase() == 'T'){
            this.makeCell(width, height, top, left, option1)
        }
        else if(type.toUpperCase() == 'I'){
            this.addUserInput(width, height, top, left)
        }

    },    
}
global.TableCellGenerator = global.TableCellGenerator || TableCellGenerator
let numtables = 0

let largetables = new Array();
let tablerows = new Array();
let tablecolumns = new Array();


function TableGenerator(){
    this.tables = []
    this.rows = []
    this.columns = []
    this.rownum = new Array();
    this.columnnum = new Array();
    this.wide = ""
    this.long = ""
    this.cellw = ""
    this.cellh = ""
}

TableGenerator.prototype = {
    setSizeTheme(width, length, small){
        this.wide = width+'px'
        this.long = length+"px"
        if(small){
            this.cellw = width/4+"px"
            this.cellh = length/6+"px"
        }
        else{
            this.cellw = width/2+"px"
            this.cellh = length/3+"px"
        }
    
    },
    makeTable: function(row, column, top, left, drag, type, option1, option2){
    
        this.rownum.push([row])
        this.columnnum.push([column])

        const cell = document.createElement('div')
        cell.id = numtables+'T'
        cell.class = 'resizable'
        numtables++

        cell.style = `
            border: 1px lightgray; 
            box-sizing: border-box; 
            margin: 10px
            `
        cell.style.overflow = 'auto'
        cell.style.width = this.wide
        cell.style.height = this.long
        cell.style.position = 'absolute'
		cell.style.top = top
        cell.style.left = left  
        cell.style.backgroundColor = '#B2BEB5'

        const temprows = []
        for(let i = 0; i < this.rownum[numtables-1][0]; i++){
            const rows = []
            const cellrow = document.createElement('div')
            cellrow.id = numtables+'R'
            cellrow.style = `
                box-sizing: border-box; 
                margin: 10px;
                display: flex;
                flex-grow: row;
                overflow: hidden;
                `
            cellrow.style.width = this.wide
            const childCell = new TableCellGenerator()

            let cn = 0

            for(let c = 0; c < column; c++){
                childCell.setCells(this.cellw, this.cellh, top, left, type, option1[i][c], option2)
                childCell.cells[c].style.position = 'static'
                cn++
            }

            for(let j of childCell.cells){
                cellrow.appendChild(j)
                rows.push(j)
            }

            cell.appendChild(cellrow)
            temprows.push(rows)
            
        }
        tablerows.push(temprows)
        this.rows.push(temprows)
        this.tables.push(temprows.flat())
        largetables.push(cell)

        const body = $('body')  //jQuery call
        body.append(cell)

        const columns = []
        const tempcolumns = temprows.flat()
        let n = 0

        for(let j = 0; j < row*column; j=j+row){
            const c = []
            for(let i = n; i < row*column; i=i+column){
                c.push(tempcolumns[i])
            }
            columns.push(c)
            n++
        }
        cell.style.resize = 'both'

        tablecolumns.push(columns)
        this.columns.push(columns)
        if(drag){
            _draggable(cell.id)
        }      
    },

    addTableRow: function(table, row, type, option1, option2){

        const addtable = largetables[table]
        const table_num = parseInt(addtable.id)

        const cell = document.createElement('div')
        cell.style = `
            box-sizing: border-box; 
            margin: 10px;
            display: flex;
            flex-grow: row;
        `
        cell.style.width = addtable.firstChild.style.width
        cell.style.height = addtable.firstChild.style.height
        const childCell = new TableCellGenerator()
        const child_styles = addtable.firstChild.firstChild.style

        for(let i = 0; i < addtable.childNodes[0].childNodes.length; i++){
            childCell.setCells(child_styles.width, child_styles.height, child_styles.top, child_styles.left, type, option1[i], option2)
            childCell.cells[i].style.position = 'static'
        }

        for(let i of childCell.cells){
            cell.appendChild(i)
        }

        addtable.insertBefore(cell, addtable.childNodes[row])
        this.rownnum[table_num][0]++
    },

    addColumn: function(table, column, type, option1, option2){

        const addtable = document.getElementById(largetables[table].id)
        const table_num = parseInt(addtable.id)
        
        const childCell = new TableCellGenerator()
        const child_styles = addtable.firstChild.firstChild.style

        for(let i = 0; i < addtable.childNodes.length; i++){
            childCell.setCells(child_styles.width, child_styles.height, child_styles.top, child_styles.left, type, option1[i], option2)
            childCell.cells[i].style.position = 'static'
        }

        for(let i = 0; i < childCell.cells.length; i++){
            addtable.childNodes[i].insertBefore(childCell.cells[i], addtable.childNodes[i].childNodes[column])
        }
        this.columnnum[table_num][0]++
    },

    removeTableRow: function(table, row){

        const addtable = largetables[table]
        const table_num = parseInt(addtable.id)

        addtable.removeChild(addtable.childNodes[row])
        this.rownum[table_num][0]--
    },

    removeTableColumn: function(table, column){

        const addtable = document.getElementById(largetables[table].id)
        const table_num = parseInt(addtable.id)
        
        const childCell = new TableCellGenerator()
        const child_styles = addtable.firstChild.firstChild.style

        for(let i = 0; i < addtable.childNodes.length; i++){
            addtable.childNodes[i].removeChild(addtable.childNodes[i].childNodes[column])
        }
        this.columnnum[table_num][0]--
    },

    addTableHeader: function(table, type){
        const addtable = largetables[table]
        const table_num = parseInt(addtable.id)

        const cell = document.createElement('div')
        cell.style = `
            box-sizing: border-box; 
            margin: 10px;
            display: flex;
            flex-grow: row;
            position: sticky;
            top: 0
        `
        cell.style.width = addtable.firstChild.style.width
        cell.style.height = addtable.firstChild.style.height
        const childCell = new TableCellGenerator()
        const child_styles = addtable.firstChild.firstChild.style

        for(let i = 0; i < addtable.childNodes[0].childNodes.length; i++){
            childCell.makeHeaderCell(child_styles.width, child_styles.height, child_styles.top, child_styles.left, type[i])
            childCell.cells[i].style.position = 'static'
        }

        for(let i of childCell.cells){
            cell.appendChild(i)
        }

        addtable.insertBefore(cell, addtable.childNodes[0])
        this.rownum[table_num][0]++
    },
    changeTableColor: function(color, table) {
        const selected = document.getElementById(largetables[table].id)
        for(let i = 0; i < this.rownum[table][0]; i++){
            for(let j = 0; j < this.columnnum[table][0]; j++){
            
                selected.childNodes[i].childNodes[j].style.backgroundColor = color
            }
        }

	},
    changeRowColor: function(color, table, row){
        const selected = document.getElementById(largetables[table].id)
        for(let j = 0; j < this.columnnum[table][0]; j++){
        
            selected.childNodes[row].childNodes[j].style.backgroundColor = color
        }
    },
    changeColumnColor: function(color, table, column){
        const selected = document.getElementById(largetables[table].id)
        for(let i = 0; i < this.rownum[table][0]; i++){
            
            selected.childNodes[i].childNodes[column].style.backgroundColor = color
        }
    },
    changeTableCellColor: function(color, table, row, column){
        const selected = document.getElementById(largetables[table].id)
        for(let i = 0; i < this.rownum[table][0]; i++){
            for(let j = 0; j < this.columnnum[table][0]; j++){
                if(i == row && j == column){
                    selected.childNodes[i].childNodes[j].style.backgroundColor = color
                }
            }
        }
    },
}
global.TableGenerator = global.TableGenerator || TableGenerator

})(window, window.document, $);     //jQuery call