function OptimizedImage({
  src,
  alt,
  className = '',
  width = 1200,
  height = 800,
  loading = 'lazy',
  priority = false,
  sizes,
  ...rest
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      sizes={sizes}
      className={className}
      {...rest}
    />
  )
}

export default OptimizedImage