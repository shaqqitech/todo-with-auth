import jwt from 'jsonwebtoken'

export const getDataFromToken = async (request) =>{
    try {
        const token = await request.cookies.get('token')?.value || '';

        const decodedToken = await jwt.verify(token, process.env.SECRET_KEY)

        return decodedToken.id
    } catch (error) {
        throw new Error(error.message)
    }
}