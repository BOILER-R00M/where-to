export const buttonBgStyles = (color) => {
    switch(color) {
        case 'purple':
            return 'bg-purple-200'
        case 'violet':
            return 'bg-violet-950'
        case 'rose':
            return 'bg-rose-400'
        case 'zinc':
            return 'bg-zinc-500'
        case 'green':
            return 'bg-green-300'
    }
}

export const paddingStyles = (size) => {
    return `p-${size}`
}

export const buttonTextColor = (color)=>{
    switch(color){
        case 'black':
            return 'text-black'
        case 'white':
            return 'text-white'
    }
}




