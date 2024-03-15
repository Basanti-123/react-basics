
import ComponentB from "./ComponentB"

const ComponentA = ({data}) => {
  return (
    <div>
     <ComponentB data={data} />
    </div>
  )
}
export default ComponentA
