// "use strict";

const cell0paragraph = new TableCellGenerator()
cell0paragraph.makeHeaderCell('400px', '600px', '100px', '300px', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus impedit maxime, quae soluta quis cumque perferendis! Doloribus quaerat, placeat iste facere, aspernatur ex cum veritatis laudantium, officia, non porro exercitationem incidunt quis dolore? Officia ex accusamus expedita optio, voluptatem minus? In maiores omnis aperiam earum ab molestiae beatae laborum blanditiis incidunt, delectus dolor, id voluptates optio aspernatur aliquam saepe atque labore? Tempore reprehenderit ab ipsam perspiciatis ut, provident perferendis sapiente in numquam blanditiis, enim, illo error nulla incidunt quos quidem ratione repellat ipsa molestias veritatis? Mollitia, fugit dolore commodi porro repudiandae atque, eos, ipsum quam culpa fuga deleniti quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus impedit maxime, quae soluta quis cumque perferendis! Doloribus quaerat, placeat iste facere, aspernatur ex cum veritatis laudantium, officia, non porro exercitationem incidunt quis dolore? Officia ex accusamus expedita optio, voluptatem minus? In maiores omnis aperiam earum ab molestiae beatae laborum blanditiis incidunt, delectus dolor, id voluptates optio aspernatur aliquam saepe atque labore? Tempore reprehenderit ab ipsam perspiciatis ut, provident perferendis sapiente in numquam blanditiis, enim, illo error nulla incidunt quos quidem ')
cell0paragraph.changeCellsColor('#6b705c', 0)
cell0paragraph.makeHeaderCell('300px', '70px', '100px', '900px', "Click the true answer")
cell0paragraph.changeCellsColor('#6b705c', 1)

const cell1quiz = new TableCellGenerator()
cell1quiz.makeQuizCells('240px', '120px', '150px', '750px','Quiz Option false', false)
cell1quiz.makeQuizCells('240px', '120px', '350px', '750px','Quiz Option false', false)
cell1quiz.makeQuizCells('240px', '120px', '150px', '1100px','Quiz Option true', true)
cell1quiz.makeQuizCells('240px', '120px', '350px', '1100px','Quiz Option false', false)

const cellForm = new TableCellGenerator()
cellForm.makeHeaderCell('200px', '60px', '600px', '750px', 'What did you think?')
cellForm.addUserInput('200px', '100px', '600px', '1070px')
cellForm.changeCellsColor('#6b705c', 0)

const cellheader = new TableCellGenerator()
cellheader.makeHeaderCell('700px', '50px', '800px', '450px', 'Table Title')
cellheader.changeCellsColor('#6b705c', 0)

const table0 = new TableGenerator()
table0.makeTable(9, 3, '600px', '1000px', '900px', '300px')
table0.changeTableColor('pink', 0)
table0.changeColumnColor('lightgrey', 0, 2)
table0.changeColumnColor('lightgreen', 0, 1)
table0.changeRowColor('grey', 0, 0)