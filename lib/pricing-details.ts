export type PlanFeature = {
    title: string;
    detail: string;
}

export type Plans = {
    planTitle: string;
    planDetail: string;
    price: string;
    cta: string;
    planFeature: PlanFeature[];
}

export const pricePlanButton = ["Foundation Plan", "Elevate Plan"]

export const PricePlans: Plans[] = [
    {
        planTitle: "Foundation Plan",
        planDetail: "A structured health & fitness plan for those who want expert-backed support in food, fitness, and mental well-being, all from the comfort of their home.",
        price: "₦19,000",
        cta: "Get started free (7-days free trial)",
        planFeature: [
            {
                title: "Health Checkups with Our General Practitioner",
                detail: "A quick monthly check-in to assess your overall well-being, refine your plan, and ensure you're on track with your health goals.",
            },
            {
                title: "Monthly Fitness Check-in with a Fitness Instructor",
                detail: "A guided session to track your fitness progress, adjust workouts, and ensure you're hitting your movement goals.",
            },
            {
                title: "Monthly Virtual Consultation with a Nutritionist",
                detail: "Discuss your eating habits, nutrient intake, and diet challenges to fine-tune your plan for better results.",
            },
            {
                title: "Access to Our AI Assistant – ASABE",
                detail: "Ask Asabe anything! Get food and fitness suggestions, friendly reminders, and real-time support—all in one chat.",
            },
            {
                title: "Comprehensive Health Monitoring",
                detail: "Track key health metrics like movement, protein intake, blood pressure, and blood sugar with AI-driven insights and expert guidance.",
            },
            {
                title: "AI-Driven Health Tracking & Insights",
                detail: "Get real-time updates on your progress, smart recommendations, and personalized health trends, all powered by AI.",
            },
            {
                title: "Invites to Wellness Events & Challenges",
                detail: "Engage with our community through expert-led discussions, fitness challenges, and interactive wellness events.",
            },
            {
                title: "Tailored Weekly Meal Plans, With Wide Options",
                detail: "Get expertly crafted meal plans every week, with multiple meal options per day to suit your preferences, health needs, and fitness goals.",
            },
            {
                title: "Monthly Copy of Our Wellness Magazine",
                detail: "Stay informed with the latest wellness research, expert insights, and inspiring health stories in our monthly Trial Corner magazine.",
            },
            {
                title: "Physical Health Checkups at Partner Locations",
                detail: "Monthly in-person checkups at our partner health centers, including blood tests, X-rays, and other essential screenings to track your progress.",
            },
            {
                title: "Physical Recovery Activity to Monitor Form",
                detail: "A dedicated session each month that includes a general fitness test, structured workout, guided stretch class, and an opportunity to try new, health-focused meals.",
            },
            {
                title: "Exclusive Wellness Experience",
                detail: "Quarterly wellness retreats featuring expert-led workshops, hands-on fitness sessions, guided meditation, and immersive health experiences to rejuvenate your body and mind.",
            }
        ]
    },
    {
        planTitle: "Elevate Plan",
        planDetail: "A comprehensive wellness package with virtual + physical checkups, recovery activities, and deeper health monitoring for a more proactive approach.",
        price: "₦30,500",
        cta: "Get started free (7-days free trial)",
        planFeature: []
    }
]