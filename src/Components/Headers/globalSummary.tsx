import { useAppSelector } from "../../app/hooks"


const GlobalSummary = () => {

    const globalData = useAppSelector((select) => select.covid.WorldSummary)

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-2'>

            <div className='col-span-1'>
                <div className='text-2xl'>TotalConfirmed</div>
                <div>{globalData.TotalConfirmed}</div>
            </div>

            <div className='col-span-1'>
                <div className='text-2xl'>TotalRecovered</div>
                <div>{globalData.TotalConfirmed - globalData.TotalDeaths}</div>
            </div>

            <div className='col-span-1'>
                <div className='text-2xl'>TotalDeaths</div>
                <div>{globalData.TotalDeaths}</div>
            </div>

        </div>
    )
}

export default GlobalSummary