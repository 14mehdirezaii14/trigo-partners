import HeaderHalf from "../../components/header/HeaderHalf";
const heroContent = {
    category: 'Founds', title: 'Founds', src: '/assets/img/project/project1/AboutHead.png'
}

const Founds = () => {
    return (
        <>
            <HeaderHalf heroContent={heroContent}
                parallax={{ yPercent: 30, scale: 1.1 }}
                textButton=""
                href="/"
            >
                {/* <strong className="color-heading">Seohee Lee</strong> <span> - September 26th 2017</span> */}
            </HeaderHalf>
        </>
    )
}

export default Founds