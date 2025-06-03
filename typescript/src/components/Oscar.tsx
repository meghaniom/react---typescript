//  import type  {HeadingProps} from './Heading'


type OscarProps = {
    children : React.ReactNode
}
const Oscar = (pros: OscarProps) => {
  return (
    <div>{pros.children}</div>
  )
}

export default Oscar