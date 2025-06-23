
type InputType = {
    type: string;
    placeholder: string;
};

interface FormeProps {
    inputs: InputType[];
}

export default function Forme({ inputs }: FormeProps){
    return 
    <>
    {inputs.map((item, id) => {
        return( <div key={id} className={style.div}>
            <input key={id}
                className={style.input}
                type={item?.type || 'text'} 
                placeholder={item?.placeholder || 'placeholder'} 
                id={item?.placeholder}
                style={item?.style}
                >
            </input>
        </div>)
    })}
    </>

}