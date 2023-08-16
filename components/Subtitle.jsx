export default function Subtitle () {
    const adjectives = ['TACTICAL', 'BRILLIANT', 'FURIOUS', 'CURIOUS', 'MIGHTY', 'SUNNY', 'GENTLE', 'SHIMMERING', 'VIBRANT', 'RADIANT', 'WHIMSICAL', 'MYSTERIOUS', 'DARING', 'ELEGANT', 'FANTASTIC', 'GLORIOUS', 'HARMONIOUS', 'INTRIGUING', 'EXTREME', 'QUESTIONABLE']
    const nouns = ['ESPIONAGE', 'MOUNTAIN', 'ADVENTURE', 'OCEAN', 'FOREST', 'DESERT', 'MEADOW', 'HORIZON', 'WONDER', 'ECLIPSE', 'CRAFT', 'LEGEND', 'PARADISE', 'QUEST', 'UNIVERSE', 'WILDERNESS', 'ANIMAL']
    const verbs = ['ACTION', 'EXPLORATION', 'DISCOVERY', 'CREATION', 'JOURNEY', 'MOMENT', 'MOVEMENT', 'INSPIRATION', 'ENCHANTMENT', 'CONQUEST', 'ESCAPE', 'TRIUMPH', 'DOMINATION']

    const getRandomWord = (wordList) => {
        const randomIndex = Math.floor(Math.random() * wordList.length)
        return wordList[randomIndex]
    };

    const generateRandomSubtitle = () => {
        const adjective = getRandomWord(adjectives)
        const noun = getRandomWord(nouns)
        const verb = getRandomWord(verbs)

        return `${adjective} ${noun} ${verb}`
    }

    const subtitle = generateRandomSubtitle();
    const desiredWidth = 50 // Adjust this value based on your desired width in pixels
    const numCharacters = subtitle.length
    const letterSpacing = (desiredWidth - numCharacters) * 0.05

    const subtitleStyle = {
        letterSpacing: `${letterSpacing}em`,
    };

    return <div style={subtitleStyle}>{subtitle}</div>
}