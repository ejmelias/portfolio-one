export default function Bars({width=200, height=500}) {
    return (
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" className="z-10">
            <pattern id="pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse" >
                <line x1="0" y1="0" x2="100" y2="100" stroke="#45517a" strokeWidth="30" strokeLinecap='square'>
                    <animate attributeName="y1" from="0" to="100" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="y2" from="100" to="200" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="0" y1="-100" x2="100" y2="0" stroke="#45517a" strokeWidth="30" strokeLinecap='square'>
                    <animate attributeName="y1" from="-100" to="0" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="y2" from="0" to="100" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="0" y1="100" x2="100" y2="200" stroke="#45517a" strokeWidth="30" strokeLinecap='square'>
                    <animate attributeName="y1" from="100" to="200" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="y2" from="200" to="300" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="0" y1="-200" x2="100" y2="-100" stroke="#45517a" strokeWidth="30" strokeLinecap='square'>
                    <animate attributeName="y1" from="-200" to="-100" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="y2" from="-100" to="0" dur="2s" repeatCount="indefinite" />
                </line>
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern)" opacity={0.2} />
        </svg>
    )
}