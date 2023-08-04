export const buttonStyles = (color) => {
    switch(color) {
        case 'purple':
            return 'bg-light-purple text-white'
        case 'violet':
            return 'bg-english-violet text-white'
        case 'coral':
            return 'bg-light-coral text-white'
        case 'silver':
            return 'bg-silver text-white'
        case 'green':
            return 'bg-tea-green text-white'
    }
}

export const paddingStyles = (size) => {
    return `p-${size}`
}


