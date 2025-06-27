import Image from "next/image"

export default function Logo(){
    return(
        <div id="logo">
            <Image src="/imagens/logo.png" alt="logo" width={80} height={80}/>
        </div>
    )
}