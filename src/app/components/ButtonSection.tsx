import { Button,Space } from "antd"

function ButtonSection(){
    const alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    return (
        <Space size={[26,16]} wrap className="m-8 rounded border border-slate-600 p-6">
            {alphabet.map((_,index)=>(
                <Button key={index}>{alphabet[index]}</Button>
            ))}
        </Space>
    )
}

export default ButtonSection