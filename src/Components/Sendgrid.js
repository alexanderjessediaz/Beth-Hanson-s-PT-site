import axios from 'axios'

export const sendEmail = async (data) => axios ({
    method: 'POST',
    url: '/email',
    data
})