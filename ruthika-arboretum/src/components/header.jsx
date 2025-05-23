import '../assets/css-files/header.css'

export default function Header() {
    return (
        <header id="header">
            <section className="logo">
            <img id="header-img" src="./src/assets/images/butterfly.png" alt="logo" />Ruthika's Arboretum
            </section>

            <nav id="nav-bar">
                <ul>
                    <li><div className="nav_con">
                        <div className="nav_link">
                        <a className="nav-link" href="">
                        About Me!
                        </a></div></div>
                    </li>
                    <li><div className="nav_con"><div className="nav_link"><a className="nav-link" href="#porties">Projects</a></div></div></li>
                    <li><div className="nav_con"><div className="nav_link"><a className="nav-link" href="https://historical-heather-2e4.notion.site/Learn-with-Me-1eae4abfd76480b3b998f48bc0c20c8a">Public Tutorials</a></div></div></li>
                    
                    <li><div className="nav_con"><div className="nav_link"><a className="nav-link" href="">Suggest a Project </a></div></div></li>
                </ul>
            </nav>
        </header>
    )
}