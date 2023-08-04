export const buttonStyles = (color) => {
    switch(color) {
        case 'purple':
            return 'bg-purple-200 text-white'
        case 'violet':
            return 'bg-violet-950 text-white'
        case 'rose':
            return 'bg-rose-400 text-white'
        case 'zinc':
            return 'bg-zinc-500 text-white'
        case 'green':
            return 'bg-green-300 text-white'
    }
}

export const paddingStyles = (size) => {
    return `p-${size}`
}




