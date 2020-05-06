const fs = require("fs");
const path = require("path");

// File System
// fs.mkdir(path.join(__dirname, "notes"), err => {
// 	if (err) throw err
	
// 	console.log("Papka create")
// })



// try {
// 	let qwe = fs.mkdirSync(path.join(__dirname, "notes"));
// 	console.log(qwe);
// }
// catch(e){
// 	console.log("Ошибка");
// }


// console.log(123);

let file_path = path.join(__dirname, "./notes", "note.txt");

fs.writeFile(file_path, "Hello world", err => {
	if (err) throw err
	console.log("Создан файл")

	fs.appendFile(file_path, " From append file", err => {
		if (err) throw err
		console.log("Изменен файл")

		fs.readFile(file_path, "utf-8", (err, data) => {
			if(err) throw err
			console.log(data);
		})
	})
})


// fs.rename(file_path, path.join(__dirname, "./notes", "./notes.txt"), err => {
// 	if(err) return console.log("Ошибка");

// 	console.log("Переименовано")
// })