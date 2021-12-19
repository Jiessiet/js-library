"use strict";
const cells = new TableCellGenerator()
const tables = new TableGenerator()
function examples() {
    
    const array = ["Products", "Review"];

    const products = [['Four Leaf Clover Necklace', 'Pufferfish Necklace'], 
    ['Four Leaf Clover Earring', 'Pufferfish Earring'], 
    ['Four Leaf Clover Braclet', 'Pufferfish Bracelet']]

    const games = 
    [[['Mario Party', 'Mario Kart', 'Super Mario']],
    [['Minecraft', 'Stardew Valley', 'Animal Crossing']],
    [['Red Dead Redemption', 'GTA V', 'Apex Legends']],]

    const header1 = ["Games", "Rating"];

    cells.makeHeaderCell('300px', '80px', '1000px', '790px', 'Which Number is Even? Click on the answer!')
    cells.makeQuizCells('300px', '80px', '1050px', '400px', 'The number 212 is even', true, false)
    cells.makeQuizCells('300px', '80px', '1050px', '800px', 'The number 493 is even', false, false)
    cells.makeQuizCells('300px', '80px', '1050px', '1200px', 'The number 105', false, false)

    cells.makeHeaderCell('300px', '90px', '1460px', '800px', 'Compare shapes to: ▭! Hint: Try moving the cells closer to compare.')
    cells.makeCell('60px', '60px', '1550px', '400px', "▱", true)
    cells.makeCell('60px', '60px', '1550px', '800px', "▢",true)
    cells.makeCell('60px', '60px', '1550px', '600px', "▯",true)
    cells.makeCell('60px', '60px', '1550px', '1400px', "▮", true)
    cells.makeCell('60px', '60px', '1550px', '1000px', "▬",true)
    cells.makeCell('60px', '60px', '1550px', '1200px', "▭",true)

    cells.changeCellsColor('pink', 5)
    cells.changeCellsColor('pink', 6)
    cells.changeCellsColor('pink', 7)
    cells.changeCellsColor('pink', 8)
    cells.changeCellsColor('pink', 9)
    cells.changeCellsColor('lightgreen', 10)

    tables.setSizeTheme('1200', '300', false)
    tables.makeTable(3, 2, '2315px', '270px', true, 't', products)
    tables.addColumn(0, 2, 'i', array)
    tables.removeTableColumn(0, 1)
    tables.changeColumnColor('#68b374', 0, 0)
    tables.addTableHeader(0, array)
    tables.changeRowColor('#828E84', 0, 0)
    

    cells.makeHeaderCell('300px', '90px', '3200px', '700px', 'Select your favourite games on the left and leave a rating for each!')
    tables.makeTable(3, 1, '3315px', '270px', false, 's', games)
    tables.addColumn(1, 1, 'h', games)
    tables.addTableHeader(1, header1)
    tables.changeRowColor('#828E84', 1, 0)
}


examples();
