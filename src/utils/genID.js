let gID = 0;

export default function genID() {
	gID++;
	const r = Math.floor(Math.random() * 100);
	const result = gID + r + Date.now();
	return result.toString();
}
