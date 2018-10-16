import axios from 'axios'

export const getComments = async () => {
	const response = await axios.get('/api/comments')
	let data = response.data
	if (data) {
		return data.slice(0, 10).map(x => x.name)
	}
	return []
}