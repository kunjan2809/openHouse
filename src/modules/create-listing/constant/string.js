const add_listing = {
    title: "ADD YOUR LISTING",
    steps: {
        step1: {
            title: "PROPERTY DETAILS",
            fields: {
                type: "Property Type*",
                bedroom: "Bedrooms*",
                bathroom: "Bathrooms*",
                floor: "Floors*",
                parking: "Car Parking*",
                basement: "Basement*",
                area: "Area*",
                description: "Description*"
            }
        },
        step2: {
            title: "LOCATION",
            fields: {
                country: "Country*",
                state: "State/Province*",
                address: "Address*",
                city: "City*",
                zip: "Zip Code*"
            }
        },
        step3: {
            title: "PRICE",
            fields: {
                price: "Price*"
            }
        },
        step4: {
            title: "DATE & TIME",
            fields: {
                date: "Date*",
                time: "Time*"
            }
        },
        step5: {
            title: "UPLOAD PICTURES"
        }
    },
    prev_btn: "PREVIOUS",
    next_btn: "SAVE & NEXT"
}

const thank_you = {
    title: "Thankyou for submitting listing details!",
    sub_title: "You’ll be notified once your post is being reviewed"
}

export { add_listing, thank_you }