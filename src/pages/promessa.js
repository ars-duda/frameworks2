import { Container } from "react-bootstrap";
import Menu from "./components/navbar";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

export default function Promessa(){
    const [divida, setDivida] = useState("")
    useEffect(() => {
        setTimeout(() => {
            document.title = "Minha Promessa"
            setDivida(" da vida")
        }, 2000);
    })
    
    return <>
        <Menu />
        <Container> 
            Promessas{(divida==="" ? "<carregando>" : divida)}    
        </Container>
        <Footer />
    </>
}