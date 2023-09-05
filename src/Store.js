import { writable } from 'svelte/store';

export let IncentiveDetails = writable([
    {
        name: 'BMW MOTORRAD',
        src: 'https://cdn1.cycletrader.com/v1/media/648b2b50f2c57229217ccb3b.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true',
        title: 'U.S. Emergency Services Workers',
        discription:
            "BEAUTIFUL BIKE, COME CHECK IT OUT IN PERSON. TOURING WITH HOT-ROD STYLING The R 18 Roctane.Appearance: Bagger.Comfort: touring motorcycle.Personality: custom factory hot rod.It is driven by the powerful big boxer engine.Ride it and every country road turns into Route 66. Its style is black and matte – that’s what joy can look like.At least for those who bring #SoulFuel to life.Bagger outline, dragster seat and mini ape- hanger demonstrate that this is not an ordinary bike.Want even more rock 'n' roll ? The bike is ready for customizing.All you need to do is own it!(European model shown.)",
        discountPrice: '$240',
        isMapped: false,
    },
    {
        name: 'R1250GS ADVENTURE',
        src: 'https://cdn1.cycletrader.com/v1/media/64ec381158de526a5e4453e6.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true',
        title: 'HOPPERS CYCLES',
        discription:
            "BEAUTIFUL BIKE, COME CHECK IT OUT IN PERSON. TOURING WITH HOT-ROD STYLING The R 18 Roctane.Appearance: Bagger.Comfort: touring motorcycle.Personality: custom factory hot rod.It is driven by the powerful big boxer engine.Ride it and every country road turns into Route 66. Its style is black and matte – that’s what joy can look like.At least for those who bring #SoulFuel to life.Bagger outline, dragster seat and mini ape- hanger demonstrate that this is not an ordinary bike.Want even more rock 'n' roll ? The bike is ready for customizing.All you need to do is own it!(European model shown.)",

        discountPrice: '$210',
        isMapped: false,
    },
    {
        name: 'RS 660 EXTREMA',
        src: 'https://cdn1.cycletrader.com/v1/media/64e642cb8509a874e964fb37.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true',
        title: 'MOTOPLEX DAYTONA',
        discription:
            "BEAUTIFUL BIKE, COME CHECK IT OUT IN PERSON. TOURING WITH HOT-ROD STYLING The R 18 Roctane.Appearance: Bagger.Comfort: touring motorcycle.Personality: custom factory hot rod.It is driven by the powerful big boxer engine.Ride it and every country road turns into Route 66. Its style is black and matte – that’s what joy can look like.At least for those who bring #SoulFuel to life.Bagger outline, dragster seat and mini ape- hanger demonstrate that this is not an ordinary bike.Want even more rock 'n' roll ? The bike is ready for customizing.All you need to do is own it!(European model shown.)",

        discountPrice: '$340',
        isMapped: false,
    },
    {
        name: 'FXFBS - Fat Bob® 114',
        src: 'https://cdn1.cycletrader.com/v1/media/64dc4cf16946c033f85d6506.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true',
        title: 'Harley-Davidson of Fargo',
        discription:
            "BEAUTIFUL BIKE, COME CHECK IT OUT IN PERSON. TOURING WITH HOT-ROD STYLING The R 18 Roctane.Appearance: Bagger.Comfort: touring motorcycle.Personality: custom factory hot rod.It is driven by the powerful big boxer engine.Ride it and every country road turns into Route 66. Its style is black and matte – that’s what joy can look like.At least for those who bring #SoulFuel to life.Bagger outline, dragster seat and mini ape- hanger demonstrate that this is not an ordinary bike.Want even more rock 'n' roll ? The bike is ready for customizing.All you need to do is own it!(European model shown.)",

        discountPrice: '$140',
        isMapped: false,
    },
    {
        name: 'R 18 Roctane',
        src: 'https://cdn1.cycletrader.com/v1/media/64d6b902648dc01b5a236257.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true',
        title: 'Irv Seaver Motorcycles',
        discription:
            "BEAUTIFUL BIKE, COME CHECK IT OUT IN PERSON. TOURING WITH HOT-ROD STYLING The R 18 Roctane.Appearance: Bagger.Comfort: touring motorcycle.Personality: custom factory hot rod.It is driven by the powerful big boxer engine.Ride it and every country road turns into Route 66. Its style is black and matte – that’s what joy can look like.At least for those who bring #SoulFuel to life.Bagger outline, dragster seat and mini ape- hanger demonstrate that this is not an ordinary bike.Want even more rock 'n' roll ? The bike is ready for customizing.All you need to do is own it!(European model shown.)",

        discountPrice: '$540',
        isMapped: false,
    }
]);

export let IncentiveData = writable([
    {
        unmapped: 0,
        mapped: 0,
        rejected: 0,
        new: 15
    }
]);

export let IncentiveFormData = writable([
    {
        incentiveTitle: '',
        drTitle: '',
        expiryDate: '',
        discription: ''
    }
]);
