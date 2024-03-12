import SimpleReactFooter from "simple-react-footer";
// import "./footer.scss"
// for documentation of footer refer https://www.npmjs.com/package/simple-react-footer

const description = "Get more with Premium: Complete projects faster with batch file processing, convert scanned documents with OCR and e-sign your business agreements.";
const title = "Contact Us";
const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Careers",
                link: "/careers"
            },
            {
                name: "Contact",
                link: "/contact"
            },
            {
                name: "Admin",
                link: "/admin"
            }
        ]
    },
    {
        title: "Legal",
        resources: [
            {
                name: "Privacy",
                link: "/privacy"
            },
            {
                name: "Terms",
                link: "/terms"
            }
        ]
    },
    {
        title: "Visit",
        resources: [
            {
                name: "Locations",
                link: "/locations"
            },
            {
                name: "Culture",
                link: "/culture"
            }
        ]
    }
];
const Footer = () => {
    return (
            <SimpleReactFooter
                description={description}
                title={title}
                columns={columns}
                linkedin="prakhar-kumar-singh"
                facebook="fluffy_cat_on_fb"
                twitter="fluffy_cat_on_twitter"
                instagram="fluffy_cat_live"
                youtube="UCFt6TSF464J8K82xeA?"
                pinterest="fluffy_cats_collections"
                copyright="Prakhar Kumar Singh"
                iconColor="white"
                backgroundColor="#3f3b36"
                fontColor="white"
                copyrightColor="darkgrey"
            />
    )
}

export default Footer
