export default function MenuButton() {
    return (
        <div className="text-center">
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 100 100"
                width="34"
                height="34"
            >
                <rect
                    id="outerSquare"
                    x="5"
                    y="5"
                    width="90"
                    height="90"
                    fill="none"
                    stroke="#45517a"
                    strokeWidth="7"
                />

                <rect
                    id="middleSquare"
                    x="20"
                    y="20"
                    width="60"
                    height="60"
                    fill="none"
                    stroke="#45517a"
                    strokeWidth="7"
                />

                <rect
                    id="innerSquare"
                    x="35"
                    y="35"
                    width="30"
                    height="30"
                    fill="none"
                    stroke="#45517a"
                    strokeWidth="7"
                />
            </svg>
            <div className="text-[0.6em]">
                menu
            </div>
        </div>
    )
}