import { FiCoffee } from 'react-icons/fi'

export default function ProductThumbnail({ image, name, size = 'md' }) {
  const sizeClasses = size === 'lg' ? 'h-28 w-28 rounded-2xl' : 'h-12 w-12 rounded-xl'

  if (image && image !== 'placeholder') {
    return (
      <img
        src={image}
        alt={name}
        className={`${sizeClasses} shrink-0 object-cover`}
      />
    )
  }

  return (
    <div
      aria-label={`Gambar ${name}`}
      className={`${sizeClasses} grid shrink-0 place-items-center bg-gold-100 text-gold-700`}
    >
      <FiCoffee size={size === 'lg' ? 34 : 19} />
    </div>
  )
}
