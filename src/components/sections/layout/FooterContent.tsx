import NewsletterInput from "@/components/inputs/NewsletterInput";
import FooterMenu from "./FooterMenu";

function FooterContent() {
    return (
        <div className="footer_content">
            <div className="footer_newsletter">
                <h3>Newsletter</h3>
                <h2>Subscribe to stay updated with our latest trips and experiences</h2>
                <NewsletterInput />
            </div>
            <FooterMenu />
        </div>
    );
}

export default FooterContent;