import { useRef } from 'react';
import './style.css'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent<EventTarget>)=>void;
}

const InputFeild = ({todo, setTodo, handleAdd}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur();
    }}>
        <input
            ref={inputRef} 
            type="text" 
            value={todo}
            onChange={
                (e)=>{setTodo(e.target.value)}
            }
            placeholder='Enter a task' className='input_box'/>
        <button className='input_submit' type='submit'>go</button>
    </form>
  )
}

export default InputFeild
