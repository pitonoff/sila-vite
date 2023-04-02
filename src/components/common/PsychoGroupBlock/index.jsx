import CustomButton from "../CustomButton"

const styles = {
    width: "480px",
    height: "360px",
    background: "var(--gradient-primary)",
    borderRadius: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    
}

const PsychoGroupBlock = ({ icon, text, buttonText }) => {
    return (
        <div style={styles}>
            <img src={icon} alt=""/>
            <h4 style={{fontSize:"28px", fontWeight:500, width:"50%", color: "white", textAlign:"center"}}>{text}</h4>
            <CustomButton
                title={buttonText}
                style={{
                    fontSize: "12px",
                    color: "var(--main-text-color)",
                    gap: 30,
                    width: 187,
                    height: 61,
                    background: "#FFFFFF",
                }} />
        </div>
    )
}

export default PsychoGroupBlock
