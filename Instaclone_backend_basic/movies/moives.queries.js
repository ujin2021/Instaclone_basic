import client from '../client'

export default {
    Query: {
        movies: () => client.movie.findMany(), // db의 movie를 검색
        movie: (_, { id }) => client.movie.findUnique({ where: { id }})
    }
}