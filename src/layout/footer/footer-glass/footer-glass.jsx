import logoFooterImg from '/logo-footer.svg';
import FooterGlassInfo from './footer-glass-info/footer-glass-info';
import Copyright from '../copyright/copyright';

function FooterGlass() {
    const styles = {
            position: "relative",
            background: "var(--footer-glass-bg-color)",
            backdropFilter: "blur(30px)",
            borderTopLeftRadius: "36px",
            borderRopRightRadius: "36px" 
    }
    return (
        <div className="footer__glass" style={styles}>
            <div className="container">
                <div className="footer__glas-inner">
                    <div className="footer__glass-logo">
                        <img src={logoFooterImg} alt="" />
                    </div>
                    <FooterGlassInfo />
                    <Copyright />
                </div>
            </div>
        </div>

        
    )
}

export default FooterGlass;
