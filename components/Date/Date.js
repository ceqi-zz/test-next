import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(res => res.json())

const DateFromAPI = () => {
    const {data, error} = useSWR('/api/date', fetcher)
    
    if(error) return <p>failed to load </p> 
    if(!data) return <p>loading...</p> 

    return <p>{data}</p>
}

export default DateFromAPI