import agendas from './_agenda.js';

const contents = JSON.stringify(agendas);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}