export async function load({ fetch }) {
	const contributions = await (await fetch('gyanaranjans/2022')).json()
	return { contributions }
}
