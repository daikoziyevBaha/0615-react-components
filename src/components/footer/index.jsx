import { compose } from "@mui/system"

const footerLinks = [
    {
        key: 1,
        name: "Star wars Official",
        url: "https://www.starwars.com/",
        // component: <StarWarsLink />
    },
    {
        key: 2, 
        name: "Star Wars Fandom",
        url: "https://starwars.fandom.com/ru/wiki/%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D0%BD%D1%8B%D0%B5_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B",
        // component: <StarWarsFanLink />
    }
]


export const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-content">
                    
                    <h3 className="footerName">Star wars Footer</h3>
                    {footerLinks.map((link) => 
                         (<a href={link.url} target="_blank" key={link.key}>
                            <h3>{link.name}</h3>
                        </a>)
                    )}
                    <a href="#"></a>
                </div>
            </footer>
        </>
    )
}