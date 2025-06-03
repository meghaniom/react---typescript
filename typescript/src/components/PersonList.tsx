


type PersonData = {
    name:{
        first : string
        last : string
    }[]
}

const PersonList = (props: PersonData) => {
  return (
    <div>
    {
        props.name.map((item, index)=> {
            return (
                <div key={index}>

                    <h2>{item.first} {item.last}</h2>
                </div>
            )
        })
    }
    </div>
  );
};
 export default PersonList