type ImageProps = {
    src: string,
    className: string
}

export const Image = ({src, className}: ImageProps) => {
    return <img className={className} src={src} alt="" />
}