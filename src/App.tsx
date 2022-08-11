import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import Chart from "./Components/Chart";
import CountrySelect from "./Components/CountrySelect";
import Headers from "./Components/Headers";
import { fetchGlobal } from "./features/fetchGlobal";


function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGlobal())
  }, [dispatch])

  return (
    <div className='text-center h-full w-full overflow-y-auto overflow-x-hidden px-2 bg-slate-200'>
      <Headers />
      <CountrySelect />
      <Chart />
    </div>
  );
}

export default App;
