import Link from "next/link"

export const metadata = {
    title: 'Solitronix',
    description: 'Solitronix Privacy Policy',
}

export default function page() {

    return (
        <div className="bg-gray-200/50 p-5 space-y-8 border-midnight/30 border">
            Solitronix uses Google AdMob to serve mobile ads. To improve the performance of AdMob, the Google Mobile Ads SDK may collect certain information from apps, including:
            <ul className="list-disc list-inside">
                <br />
                <li>IP address, which may be used to estimate the general location of a device.</li> 
                <br />
                <li>Non-user related crash logs, which may be used to diagnose problems and improve the SDK. Diagnostic information may also be used for advertising and analytics purposes.</li> 
                <br />
                <li>User-associated performance data such as app launch time, hang rate, or energy usage, which may be used to evaluate user behavior, understand the effectiveness of existing product features, and plan new features. Performance data may also be used for displaying ads, including sharing with other entities that display ads.</li> 
                <br />
                <li> A Device ID, such as the device's advertising identifier or other app- or developer-bounded device identifiers, which may be used for the purpose of third-party advertising and analytics.</li> 
                <br />
                <li>Advertising data, such as advertisements the user has seen, may be used to power analytics and advertising features.</li> 
                <br />
                <li> Other user product interactions like app launch taps, and interaction information, like video views, may be used to improve advertising performance.</li> 
            </ul>
        </div>
    )
}

