import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white" id='about'>
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    La Botte's modern and classic Italian Lunch and Dinner 
                    menus are available in their main dining room, the outdoor 
                    patio, at the beautiful white marble wine bar, or in the 
                    back private party dining room overlooking the Four Seasons 
                    water features and grounds. The Italian restaurant lunch, dinner 
                    and catering menus are also available for takeout to go. 
                    You can also order from our private takeout menu directly for pickup 
                    at the White Plains Italian restaurant by walk-in, curbside pickup (just pull up in front), 
                    or you can take advantage of our Free Parking garage.  Coming soon is our reduced price delivery 
                    option when ordering through our takeout platform.  You can click on the takeout menu above and 
                    place your order through our platform for lunch, dinner, or order off-site-catering (48 hour 
                    prior to pickup or delivery).  
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}