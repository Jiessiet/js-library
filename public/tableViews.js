// "use strict";

const defaultColor = 'lightgray'
let tableNumber = 0;
let cellNumber = 0;
let inputNum = 0;
let buttonNum = 0;
let formNum = 0

function TableCellGenerator(){
    this.cells = []
    this.buttons = []
    this.userinputs = []
    this.equations = []
    this.forms = []
}

TableCellGenerator.prototype = {
    // makeIndivCell: function()
    makeCell: function(width, height, top, left, words){
        const cell = document.createElement('div')
        cell.id = cellNumber
        cellNumber++
        cell.style = `
            border-radius: 16%; 
            border: 1px solid black; 
            box-sizing: border-box; 
            margin: 10px`

        cell.style.width = width
        cell.style.height = height
        cell.style.backgroundColor = defaultColor
		cell.style.top = top
        cell.style.left = left
        cell.style.overflow = "auto"
        cell.style.textAlign = 'center'
        cell.innerHTML = typeof words !== 'undefined' ? words : ''

        document.body.appendChild(cell)
		
		this.cells.push(cell)
	},

	changeCellsColor: function(color, cell) {
		this.cells[cell].style.backgroundColor = color
	},

    addUserInput: function(width, height, top, left){
        const form = document.createElement('form')
        form.id = 'form' + formNum
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
        input.style = 'border-radius: 16%; border: 1px solid black; box-sizing: border-box; margin: 10px;'
        
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
        submit.id = 'btn' + buttonNum
        buttonNum++

        submit.style.position = 'relative'
        submit.innerText = 'submit'
        let value = ''

        submit.addEventListener('click', (e) => {
            e.preventDefault()
            value = input.value
            console.log(value)
            return value
        })

        form.appendChild(input)
        form.appendChild(submit)

        const body = $('body')
        body.append(form)
		this.cells.push(input)
    },

    makeHeaderCell: function(width, height, top, left, words){
        const cell = document.createElement('div')
        cell.id = cellNumber
        cellNumber++
        cell.style = `
            border-radius: 16%; 
            border: 1px solid black; 
            box-sizing: border-box; 
            padding: 20px`

        cell.style.width = width
        cell.style.height = height
        cell.style.backgroundColor = defaultColor
		cell.style.top = top
        cell.style.left = left
        cell.style.position = 'absolute'
        cell.style.textAlign = 'center'
        // cell.style.textIndent = '35px'
        cell.innerHTML = typeof words !== 'undefined' ? words : ''

        document.body.appendChild(cell)
		
		this.cells.push(cell)
    },

    makeQuizCells: function(width, height, top, left, text, value){
        const button = document.createElement('button')
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

        const body = $('body')
		body.append(button)
		
		this.cells.push(button)
    },

    changeCellType: function(){
        //user input
        //equation
        //hearts
        //button (can also be selection)
    },  
}
let numtables = 0

function TableGenerator(){
    this.largetables = []
    this.tablerows = []
    this.tablecolumns = []
    this.border = []
}

TableGenerator.prototype = {
    makeTable: function(row, column, theight, twidth, top, left, words){
        //takes input from user to how many rows and columns for table
        const cell = document.createElement('div')
        cell.id = numtables
        numtables++
        cell.style = `
            border: 1px lightgray; 
            box-sizing: border-box; 
            margin: 10px
            `
        cell.style.overflow = 'auto'
        cell.style.width = twidth
        cell.style.height = theight
        cell.style.position = 'absolute'
		cell.style.top = top
        cell.style.left = left  
        cell.style.backgroundColor = '#ffe8d6'     

        const cellw = ((parseInt(twidth)/column)-5)+'px'
        const cellh = ((parseInt(theight)/row)-5)+'px'

        const temprows = []
        for(let i = 0; i < row; i++){
            const rows = []
            const cellrow = document.createElement('div')
            cellrow.style = `
                box-sizing: border-box; 
                margin: 10px;
                display: flex;
                flex-grow: row;
                `
            cellrow.style.width = twidth
            cellrow.style.height = cellh

            const childCell = new TableCellGenerator()

            for(let i = 0; i < column; i++){
                childCell.makeCell(cellw, cellh, top, left)
            }

            for(let i of childCell.cells){
                cellrow.appendChild(i)
                rows.push(i)
            }

            cell.appendChild(cellrow)
            temprows.push(rows)
            
        }
        this.tablerows.push(temprows)
        this.largetables.push(temprows.flat())
        document.body.appendChild(cell)

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

        this.tablecolumns.push(columns)
    },

    addRow: function(column, rwidth, rheight, top, left){
        const cell = document.createElement('div')
        cell.style = `
            box-sizing: border-box; 
            margin: 10px;
            display: flex;
            flex-grow: row;
            `
        cell.style.width = rwidth
        cell.style.height = rheight

        const childCell = new TableCellGenerator()

        for(let i = 0; i < column; i++){
            childCell.makeCell('120px', '120px', top, left)
        }

        for(let i of childCell.cells){
            cell.appendChild(i)
        }

        document.body.appendChild(cell)

    },
    addTableRow: function(table, row){

        const cell = document.createElement('div')
        cell.style = `
            box-sizing: border-box; 
            margin: 10px;
            display: flex;
            flex-grow: row;
            `
        cell.style.width = rwidth
        cell.style.height = rheight

        const childCell = new TableCellGenerator()

        for(let i = 0; i < column; i++){
            childCell.makeCell('120px', '120px', top, left)
        }

        for(let i of childCell.cells){
            cell.appendChild(i)
        }

        document.body.appendChild(cell)

    },

    addColumn: function(table, columnNumber, theight, twidth, top, left, words){
        const cg = new TableCellGenerator()
        for(let i = 0; i< this.tablecolumns[table][columnNumber].length; i++){
            cg.makeCell('120px', '120px', '10px', '10px')           
        }
        this.largetables[table].cells.splice(3, 0, cg.cells)
        this.largetables[table].cells = this.largetables[table].cells.flat()
        
        const cellw = ((parseInt(twidth)/this.tablecolumns[table].length)-5)+'px'
        const cellh = ((parseInt(theight)/this.tablerows[table].length)-5)+'px'
        
        const column = parseInt(twidth)/this.tablecolumns[table].length
        // const row = parseInt(theight)/this.tablerows[table].length

        for (let i = 0; i < column; i++) {
            const position_widths = 
            (parseInt(left)+
            ((i)*parseInt(twidth)/parseInt(column))) + 
            parseInt(left)+"px"

           for (let j = 0; j < row; j++){
            const position_heights = 
            (parseInt(top)+
            ((j)*parseInt(theight)/parseInt(row))) + 
            parseInt(top)+"px"

            this.largetables[table].cells[j].style.width = cellw
            console.log(this.largetables[table].cells[j].style.width)
            console.log(j)
           }
        }

        // for(let i = 0; i < this.largetables[table].cells.length; i++){
        //     this.largetables[table].cells[i].style.width = '10px'

        // }

               
        console.log(cg)
        console.log(this.largetables[table].cells)   
    },
    addTableHeader: function(){

    },
    changeTableColor: function(color, table) {
        for(let i of this.largetables[table]){
		    i.style.backgroundColor = color
        }
	},
    changeRowColor: function(color, table, row){
        for(const j of this.tablerows[table][row]){
            j.style.backgroundColor = color
        }
    },
    changeColumnColor: function(color, table, column){
        for(const j of this.tablecolumns[table][column]){
            j.style.backgroundColor = color
        }
    },
    changeTableCellColor: function(color, table, row, column){
        // row=row-1
        // column=column-1

        for(const i of this.tablerows[table][row]){
            
            for(const j of this.tablecolumns[table][column]){
                
                if(j === i){
                    i.style.backgroundColor = color
                }
            }
        }
    },
}