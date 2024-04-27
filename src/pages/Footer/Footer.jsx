
const Footer = () => {
    return (
        <div className="bg-base-200 py-16 md:py-24">
            <footer className="footer text-base-content w-[90%] md:max-w-6xl mx-auto">
                <aside>
                    <h1 className="text-4xl font-bold text-cyan-700">Ceramics <br /> & Pottery</h1>
                    <p className="font-semibold mt-4">ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;