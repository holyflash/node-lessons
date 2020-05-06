const http = require("http");


const server = http.createServer((req, res) => {
	if(req.method === "GET") {
		res.writeHead(200, {
			"Content-Type": "text/html"
		})
		res.end(`
			<h1>Form</h1>
			<form method="post" action="/" accept-charset="utf-8">
				<input name="title" type="text">
				<button type="submit">Send</button>
			</form>
		`)
	}
	else if(req.method === "POST") {
		const body = []
		let message = ""

		req.on("data", data => {
			body.push(Buffer.from(data))
			message += data.toString("utf8")
		})

		res.writeHead(200, {
			"Content-Type": "text/html; charset=utf-8"
		})
		req.on("end", () => {
			let title = message.split("=")[1]
			console.log(title);
			// const message = body.toString("utf8").split("=")[1]
			res.end(`
				<h1>Ваше сообщение: ${title} </h1>
			`)
		})
	}
})

server.listen(3000, () => {
	console.log("Сервер запущен...")
})