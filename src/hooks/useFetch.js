
import axios from 'axios'
import React, { useState } from 'react'

const useFetch = (url) => {

    const [response, setresponse] = useState()
    const [hasError, setHasError] = useState(false)

    const getApi=()=>{
        axios.get(url)
            .then(res => {setresponse(res.data)
                        setHasError(false)})
            .catch(err => {console.log(err)
                        setHasError(true)})
    }

    return [response, getApi, hasError]
 
}



export default useFetch