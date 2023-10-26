const Gallery = ({images}) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {
        images.map((image, _index) => (
          <img className="w-full hover:border hover:border-indigo-600 cursor-pointer hover:scale-105 ease-in duration-300" src={image.src.medium} key={_index}/>
        ))
      }
    </div>
  )
}

export default Gallery;