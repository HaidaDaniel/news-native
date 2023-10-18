/** @format */

import axios from 'axios'

const apiKey = 'ea9478b889874109afc4d4ce6c5388df'
const apiUrl = 'https://newsapi.org/v2/top-headlines'
const country = 'us'

export async function fetchTopNewsInUSA() {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        country: country,
        apiKey: apiKey,
      },
    })
    return response
  } catch (error) {
    console.error('Error', error)
  }
}


