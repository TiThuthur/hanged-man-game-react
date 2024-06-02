import { Button,Space } from "antd"

function ButtonSection(){
    const alphabet=["A","B","C","D","E","F","G","H","I"]
    return (
        <Space size={[26,16]} wrap>
            {new Array(9).fill(null).map((_,index)=>(
                <Button key={index}>{alphabet[index]}</Button>
            ))}
        </Space>
    )
}

export default ButtonSection