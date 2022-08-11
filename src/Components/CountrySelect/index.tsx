import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchByCountryHistory } from "../../features/byCoutryHistory"
import { fetchCountry } from "../../features/fetchCountry"
import { fetchWorldHistory } from "../../features/fetchWorldHistory"

const CountrySelect = () => {

    const countryList = useAppSelector((select) => select.covid.countryList)
    const dispatch = useAppDispatch()
    const [selectCountry, setSelectCountry] = useState<string>('WORLD')

    useEffect(() => {
        if (countryList.length === 1)
            dispatch(fetchCountry())
    }, [dispatch, countryList])

    useEffect(() => {
        if (selectCountry !== 'WORLD') {
            if (countryList.findIndex((country) => country.Country === selectCountry) > -1)
                dispatch(fetchByCountryHistory(selectCountry))
        } else if (selectCountry === 'WORLD')
            dispatch(fetchWorldHistory())

    }, [selectCountry, countryList, dispatch])

    return (
        <div className=''>
            <input className='px-2 w-1/3 outline-none' list='countries' value={selectCountry} onChange={(e) => setSelectCountry(e.target.value)} onFocus={() => setSelectCountry('')} name='country' id='country' />
            <datalist id='countries'>
                <option value='WORLD' />
                {countryList.map((country, index) => <option key={index + country.ISO2} value={country.Country} />)}
            </datalist>
        </div>
    )
}

export default CountrySelect